import React, { useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
  const [isMoviesLoaded, setIsMoviesLoaded] = useState(true);
  return (
    <>
      <Header />
      <SearchForm />
      {isMoviesLoaded ? <MoviesCardList /> : <Preloader />}
      <div className="button-more-container">
        <button className="button-more">Ещё</button>
      </div>
    </>
  )
}

export default Movies;