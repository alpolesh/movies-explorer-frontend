import React, { useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import {filterCardsAccToInput} from '../../utils/utils';

function Movies() {
  const [isRequestFetching, setIsRequestFetching] = useState(false);

  function handleSearchMovieClick(inputsData) {
    setIsRequestFetching(true);
    moviesApi.getInitialMovies()
    .then((res) => {
      localStorage.setItem('moviesFromBeatfilm', JSON.stringify(res));
      console.log(JSON.parse(localStorage.getItem('moviesFromBeatfilm')));
      const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
      filterCardsAccToInput(inputsData, moviesArr);
      } 
    )
    .then(() => {
      setIsRequestFetching(false);
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <Header />
      <SearchForm 
        onSearchMovieClick={handleSearchMovieClick}
      />
      {isRequestFetching 
      ? 
      <Preloader /> 
      : 
      <>
        <MoviesCardList parrentComponent='Movies'/>
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