import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import {filterCardsAccToInput} from '../../utils/utils';

function Movies() {
  const jwt = localStorage.getItem('jwt');

  const [isRequestFetching, setIsRequestFetching] = useState(false);
  const [searchMovieTitle, setSearchMovieTitle] = useState(() => {
    return localStorage.getItem('searchMovieTitle') ? JSON.parse(localStorage.getItem('searchMovieTitle')) : ''
  });
  const [searchShortMovieIsChecked, setSearchShortMovieIsChecked] = useState(() => {
    return localStorage.getItem('searchShortMovieIsChecked') ? JSON.parse(localStorage.getItem('searchShortMovieIsChecked')) : false
  });
  const [errorFromBeatFilm, setErrorFromBeatFilm] = useState(false);
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
  const [isSearchedPreviously, setIsSearchedPreviously] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState(() => {
    return localStorage.getItem('moviesFromBeatfilm') ? filterCardsAccToInput(searchMovieTitle, JSON.parse(localStorage.getItem('moviesFromBeatfilm'))) : [];
  })

  const [moviesArrForRender, setMoviesArrForRender] = useState(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
  const [moviesByCurrentUser, setMoviesByCurrentUser] = useState([]);

  const updateDimension = () => {
    setTimeout(function(){setWidthDisplay(window.innerWidth)}, 1000);
  }

  function calculateNumberOfCardsWithResolution() {
    if (widthDisplay >= 1280) return 12;
    else if (widthDisplay >= 768) return 8;
    else if (widthDisplay >= 320) return 5;
  }

  function handleButtonMoreClick() {
    setMoviesArrForRender(moviesArrForRender.concat(filteredMovies.slice(moviesArrForRender.length, moviesArrForRender.length + calculateNumberOfCardsWithResolution())))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  });

  useEffect(() => {
    setMoviesArrForRender(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
    setIsRequestFetching(true);
    getAllMoviesByUser(jwt);
  }, [filteredMovies])

  function getAllMoviesByUser(jwt) {
    mainApi.getAllMoviesByCurrentUser(jwt)
    .then((res) => {
      console.log(res.data);
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
    setErrorFromBeatFilm(false);
    localStorage.setItem('searchMovieTitle', JSON.stringify(searchMovieTitle));
    localStorage.setItem('searchShortMovieIsChecked', JSON.stringify(searchShortMovieIsChecked));
    // getAllMoviesByUser(jwt);
    if (localStorage.getItem('moviesFromBeatfilm')) {
      const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
      setFilteredMovies(filterCardsAccToInput(inputsData, moviesArr));
      setIsRequestFetching(true);
    } else {
      moviesApi.getInitialMovies()
      .then((res) => {
        localStorage.setItem('moviesFromBeatfilm', JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem('moviesFromBeatfilm')));
        const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
        setFilteredMovies(filterCardsAccToInput(inputsData, moviesArr));
        setIsRequestFetching(false);
        } 
      )
      .catch((err) => {
        console.log(err);
        setIsRequestFetching(false);
        setErrorFromBeatFilm(true);
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
          errorFromBeatFilm={errorFromBeatFilm}
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