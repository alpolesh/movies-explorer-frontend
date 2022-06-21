import React, { useState, useEffect, useContext } from 'react';
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {filterCardsAccToInput,filterMoviesAccToDuration} from '../../utils/utils';

function SavedMovies() {
  const {savedFilmsDictionary} = useContext(CurrentUserContext);
  const [searchMovieTitle, setSearchMovieTitle] = useState('');
  const [searchShortMovieIsChecked, setSearchShortMovieIsChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesArrForRender, setMoviesArrForRender] = useState([]);

  function getMoviesByCurrentUser() {
    const moviesArr = JSON.parse(localStorage.getItem('moviesFromBeatfilm'));
    const resArr = moviesArr.filter((item) => Object.keys(savedFilmsDictionary).includes(item.id.toString()));
    return resArr;
  }

  function filterMovies(inputsData, moviesArr) {
    setFilteredMovies(filterMoviesAccToDuration(filterCardsAccToInput(inputsData, moviesArr), searchShortMovieIsChecked));
  }

  useEffect(() => {
    console.log(getMoviesByCurrentUser())
    filterMovies(searchMovieTitle, getMoviesByCurrentUser());
  }, [savedFilmsDictionary])
  
  useEffect(() => {
    setMoviesArrForRender(filteredMovies);
  }, [filteredMovies]);

  useEffect(() => {
    filterMovies(searchMovieTitle, getMoviesByCurrentUser());
  }, [searchShortMovieIsChecked])

  function handleSearchMovieClick(inputsData) {
    filterMovies(inputsData, getMoviesByCurrentUser());
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
        <MoviesCardList 
          parrentComponent='Saved-movies'
          isSearchedPreviously={true}
          moviesArrForRender={moviesArrForRender}
        />
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;