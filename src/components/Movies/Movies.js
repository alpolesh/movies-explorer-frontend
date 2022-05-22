import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import {filterCardsAccToInput, filterMoviesAccToDuration} from '../../utils/utils';
import useNumberOfCardsWithResolution from '../../utils/useNumberOfCardsWithResolution';

function Movies() {
  const jwt = localStorage.getItem('jwt');
  const {calculateNumberOfCardsWithResolution} = useNumberOfCardsWithResolution();

  const [isRequestFetching, setIsRequestFetching] = useState(false);
  const [searchMovieTitle, setSearchMovieTitle] = useState(() => {
    return localStorage.getItem('searchMovieTitle') ? JSON.parse(localStorage.getItem('searchMovieTitle')) : ''
  });
  const [searchShortMovieIsChecked, setSearchShortMovieIsChecked] = useState(() => {
    return localStorage.getItem('searchShortMovieIsChecked') ? JSON.parse(localStorage.getItem('searchShortMovieIsChecked')) : false
  });
  const [errorFromServer, setErrorFromServer] = useState(false);
  const [isSearchedPreviously, setIsSearchedPreviously] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([])

  const [moviesArrForRender, setMoviesArrForRender] = useState(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
  const [moviesByCurrentUser, setMoviesByCurrentUser] = useState([]);

  function handleButtonMoreClick() {
    setMoviesArrForRender(moviesArrForRender.concat(filteredMovies.slice(moviesArrForRender.length, moviesArrForRender.length + calculateNumberOfCardsWithResolution())))
  }

  function filterMovies(inputsData, moviesArr) {
    setFilteredMovies(filterMoviesAccToDuration(filterCardsAccToInput(inputsData, moviesArr), searchShortMovieIsChecked));
  }

  useEffect(() => {
    setMoviesArrForRender(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
    setIsRequestFetching(true);
    getAllMoviesByUser(jwt);
  }, [filteredMovies])

  useEffect(() => {
    filterMovies(searchMovieTitle, localStorage.getItem('moviesFromBeatfilm') ? JSON.parse(localStorage.getItem('moviesFromBeatfilm')) : []);
  }, [searchShortMovieIsChecked])

  function getAllMoviesByUser(jwt) {
    mainApi.getAllMoviesByCurrentUser(jwt)
    .then((res) => {
      setMoviesByCurrentUser(res.data);
      setIsRequestFetching(false);
    })
    .catch((err) => {
      console.log(err);
      setIsRequestFetching(false);
    })
  }

  function handleSearchMovieClick(inputsData) {
    setIsSearchedPreviously(true);
    setErrorFromServer(false);
    localStorage.setItem('searchMovieTitle', JSON.stringify(searchMovieTitle));
    if (localStorage.getItem('moviesFromBeatfilm')) {
      const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
      filterMovies(inputsData, moviesArr);
      setIsRequestFetching(true);
    } else {
      moviesApi.getInitialMovies()
      .then((res) => {
        localStorage.setItem('moviesFromBeatfilm', JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem('moviesFromBeatfilm')));
        const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
        filterMovies(inputsData, moviesArr);
        setIsRequestFetching(false);
        } 
      )
      .catch((err) => {
        console.log(err);
        setIsRequestFetching(false);
        setErrorFromServer(true);
      })
    }
  }

  return (
    <>
      <Header />
      <SearchForm 
        onSearchMovieClick={handleSearchMovieClick}
        searchMovieTitle={searchMovieTitle}
        setSearchMovieTitle={setSearchMovieTitle}
        searchShortMovieIsChecked={searchShortMovieIsChecked}
        setSearchShortMovieIsChecked={setSearchShortMovieIsChecked}
        parrentComponent='Movies'
      />
      {isRequestFetching 
      ? 
      <Preloader /> 
      : 
      <>
        <MoviesCardList 
          parrentComponent='Movies'
          isSearchedPreviously={isSearchedPreviously}
          moviesArrForRender={moviesArrForRender}
          errorFromServer={errorFromServer}
          moviesByCurrentUser={moviesByCurrentUser}
        />
        {filteredMovies.length !== moviesArrForRender.length
        ?
        <div className="button-more-container">
          <button className="button-more" onClick={handleButtonMoreClick}>Ещё</button>
        </div>
        :
        ''
        }
      </>
      }
      <Footer />
    </>
  )
}

export default Movies;