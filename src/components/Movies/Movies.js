import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import {filterCardsAccToInput} from '../../utils/utils';

function Movies() {
  const [isRequestFetching, setIsRequestFetching] = useState(false);
  const [searchMovieTitle, setSearchMovieTitle] = useState(() => {
    return localStorage.getItem('searchMovieTitle') ? JSON.parse(localStorage.getItem('searchMovieTitle')) : ''
  });
  const [searchShortMovieIsChecked, setSearchShortMovieIsChecked] = useState(() => {
    return localStorage.getItem('searchShortMovieIsChecked') ? JSON.parse(localStorage.getItem('searchShortMovieIsChecked')) : false
  });
  const [filteredMovies, setFilteredMovies] = useState(() => {
    return localStorage.getItem('moviesFromBeatfilm') ? filterCardsAccToInput(searchMovieTitle, JSON.parse(localStorage.getItem('moviesFromBeatfilm'))) : []
  });
  const [errorFromBeatFilm, setErrorFromBeatFilm] = useState(false);
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
  const [moviesArrForRender, setMoviesArrForRender] = useState(filteredMovies.slice(0, calculateNumberOfCardsWithResolution()));
  

  const updateDimension = () => {
    setWidthDisplay(window.innerWidth);
  }

  function calculateNumberOfCardsWithResolution() {
    if (widthDisplay >= 1280) return 12;
    else if (widthDisplay >= 768) return 8;
    else if (widthDisplay >= 320) return 5;
  }

  function createMoviesArray() {
    setMoviesArrForRender(moviesArrForRender.concat(filteredMovies.slice(moviesArrForRender.length, moviesArrForRender.length + calculateNumberOfCardsWithResolution())))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, [widthDisplay]);

  function handleSearchMovieClick(inputsData) {
    setErrorFromBeatFilm(false);
    localStorage.setItem('searchMovieTitle', JSON.stringify(searchMovieTitle));
    localStorage.setItem('searchShortMovieIsChecked', JSON.stringify(searchShortMovieIsChecked));
    if (localStorage.getItem('moviesFromBeatfilm')) {
      const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
      setFilteredMovies(filterCardsAccToInput(inputsData, moviesArr));
    } else {
      setIsRequestFetching(true);
      moviesApi.getInitialMovies()
      .then((res) => {
        localStorage.setItem('moviesFromBeatfilm', JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem('moviesFromBeatfilm')));
        const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
        setFilteredMovies(filterCardsAccToInput(inputsData, moviesArr));
        setIsRequestFetching(false);
        } 
      )
      .then(() => setIsRequestFetching(false))
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
          filteredMoviesArr={filteredMovies}
          moviesArrForRender={moviesArrForRender}
          errorFromBeatFilm={errorFromBeatFilm}
        />
        <div className="button-more-container">
          <button className="button-more" onClick={createMoviesArray}>Ещё</button>
        </div>
      </>
      }
      <Footer />
    </>
  )
}

export default Movies;