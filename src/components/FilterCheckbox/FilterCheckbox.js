import React, { useState, useEffect } from 'react';

function FilterCheckbox() {
  const [shortFilmIsChecked, setShortFilmIsChecked] = useState(false);

  function handleChangeShortFilmCheckbox(e) {
    setShortFilmIsChecked(!shortFilmIsChecked);
  }

  useEffect(() => {
    setShortFilmIsChecked(false);
  }, [])

  return (
    <div className="search__short-movies-filter">
      <label className="switch">
        <input type="checkbox" className="switch__checkbox" checked={shortFilmIsChecked} onChange={handleChangeShortFilmCheckbox} />
        <span className="switch__slider"></span>
      </label>
      <span className="search__caption">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;