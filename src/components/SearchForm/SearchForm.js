import React, { useState, useEffect } from 'react';
import searchIcon from '../../images/search__icon.png';

function SearchForm() {
  const [movieTitle, setMovieTitle] = useState('');

  function handleChangeMovieTitle(e) {
    setMovieTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    setMovieTitle('');
  }, [])

  return (
    <section className="search">
      <form name="search-movie" onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <input type="text" value={movieTitle || ''} onChange={handleChangeMovieTitle} id="movie-title-input" className="search__input" name="search-input" placeholder="Фильм" minLength="1" maxLength="50" />
          <button type="submit" className="search__submit"><img className="search__icon" src={searchIcon} alt="search icon" /></button>
        </div>
      </form>
      <div className="search__short-movies-filter">
        <label className="switch">
          <input type="checkbox" className="switch__checkbox" />
          <span className="switch__slider"></span>
        </label>
        <span className="search__caption">Короткометражки</span>
      </div>
    </section>
  )
}

export default SearchForm;