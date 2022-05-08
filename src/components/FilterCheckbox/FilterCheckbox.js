import React, { useState, useEffect } from 'react';

function FilterCheckbox(props) {
  const {searchShortMovieIsChecked, setSearchShortMovieIsChecked} = props;

  function handleChangeShortFilmCheckbox(e) {
    setSearchShortMovieIsChecked(!searchShortMovieIsChecked);
  }

  return (
    <div className="search__short-movies-filter">
      <label className="switch">
        <input type="checkbox" className="switch__checkbox" checked={searchShortMovieIsChecked} onChange={handleChangeShortFilmCheckbox} />
        <span className="switch__slider"></span>
      </label>
      <span className="search__caption">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;