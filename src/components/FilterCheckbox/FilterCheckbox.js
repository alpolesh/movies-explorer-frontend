import React, { useEffect } from 'react';

function FilterCheckbox(props) {
  const {searchShortMovieIsChecked, setSearchShortMovieIsChecked, parrentComponent} = props;

  function handleChangeShortFilmCheckbox(e) {
    setSearchShortMovieIsChecked(!searchShortMovieIsChecked);
  }

  useEffect(() => {
    if (parrentComponent === 'Movies') {
      localStorage.setItem('searchShortMovieIsChecked', JSON.stringify(searchShortMovieIsChecked));
    }
  }, [searchShortMovieIsChecked])

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