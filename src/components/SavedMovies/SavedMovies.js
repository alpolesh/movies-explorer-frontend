import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import useNumberOfCardsWithResolution from '../../utils/useNumberOfCardsWithResolution';
import {filterCardsAccToInput} from '../../utils/utils';
import mainApi from '../../utils/MainApi';

function SavedMovies() {
  const jwt = localStorage.getItem('jwt');
  const {calculateNumberOfCardsWithResolution} = useNumberOfCardsWithResolution();

  const [isRequestFetching, setIsRequestFetching] = useState(false);
  const [searchMovieTitle, setSearchMovieTitle] = useState('');
  const [searchShortMovieIsChecked, setSearchShortMovieIsChecked] = useState(false);
  const [errorFromServer, setErrorFromServer] = useState(false);
  // const [isSearchedPreviously, setIsSearchedPreviously] = useState(false);
  const [moviesByCurrentUser, setMoviesByCurrentUser] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(moviesByCurrentUser);
  const [moviesArrForRender, setMoviesArrForRender] = useState(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
  const [isMovieDeleted, setIsMovieDeleted] = useState(false);

  function getAllMoviesByCurrentUser() {
    setIsRequestFetching(true);
    mainApi.getAllMoviesByCurrentUser(jwt)
    .then((res) => {
      console.log(res.data);
      setMoviesByCurrentUser(res.data);
      setMoviesArrForRender(res.data.slice(0, calculateNumberOfCardsWithResolution()));
      setIsRequestFetching(false)
    })
    .catch((err) => {
      console.log(err);
      setIsRequestFetching(false);
      setErrorFromServer(true);
    })
  }

  useEffect(() => {
    getAllMoviesByCurrentUser();
  }, [])
  
  useEffect(() => {
    setMoviesArrForRender(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
  }, [filteredMovies]);

  function handleSearchMovieClick(inputsData) {
    setFilteredMovies(filterCardsAccToInput(inputsData, moviesByCurrentUser));
  }

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId, jwt)
    .then((res) => {
      console.log(res);
      getAllMoviesByCurrentUser();
    })
    .catch((err) => {
      console.log(err);
    })
  }
  

  return (
    <>
      <div className="saved-movies-wrapper">
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
        <MoviesCardList 
          parrentComponent='Saved-movies'
          isSearchedPreviously={true}
          moviesArrForRender={moviesArrForRender}
          errorFromServer={errorFromServer}
          moviesByCurrentUser={moviesByCurrentUser}
          onDeleteMovie={deleteMovie}
        />
        }
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;