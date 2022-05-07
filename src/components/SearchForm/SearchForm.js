import React, { useState, useEffect } from 'react';
import searchIcon from '../../images/search__icon.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [movieTitle, setMovieTitle] = useState('');

  function handleChangeMovieTitle(e) {
    setMovieTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchMovieClick(movieTitle);
  }

  useEffect(() => {
    setMovieTitle('');
  }, [])

  return (
    <section className="search">
      <form name="search-movie" onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <input type="text" value={movieTitle || ''} onChange={handleChangeMovieTitle} id="movie-title-input" className="search__input" name="search-input" placeholder="Фильм" minLength="1" maxLength="50" required/>
          <button type="submit" className="search__submit"><img className="search__icon" src={searchIcon} alt="search icon" /></button>
        </div>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;