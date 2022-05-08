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

  function handleSearchMovieClick(inputsData) {
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
          moviesCardsArr={filteredMovies}
        />
        <div className="button-more-container">
          <button className="button-more">Ещё</button>
        </div>
      </>
      }
      <Footer />
    </>
  )
}

export default Movies;