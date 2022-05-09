import React, { useState, useEffect } from 'react';
import searchIcon from '../../images/search__icon.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const {searchMovieTitle, setSearchMovieTitle, searchShortMovieIsChecked, setSearchShortMovieIsChecked} = props;

  function handleChangeMovieTitle(e) {
    setSearchMovieTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchMovieClick(searchMovieTitle);
  }

  return (
    <section className="search">
      <form name="search-movie" onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <input type="text" value={searchMovieTitle || ''} onChange={handleChangeMovieTitle} id="movie-title-input" className="search__input" name="search-input" placeholder="Фильм" minLength="1" maxLength="50"/>
          <button type="submit" className="search__submit"><img className="search__icon" src={searchIcon} alt="search icon" /></button>
        </div>
      </form>
      <FilterCheckbox 
        searchShortMovieIsChecked={searchShortMovieIsChecked}
        setSearchShortMovieIsChecked={setSearchShortMovieIsChecked}
      />
    </section>
  )
}

export default SearchForm;