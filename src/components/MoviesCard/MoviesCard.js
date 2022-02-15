import React, { useState } from 'react';

function MoviesCard(props) {
  const {title, duration, trailerLink} = props;
  const imageUrl = "https://api.nomoreparties.co" + props.imageUrl;
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  function handleChangeMovieSaving(e) {
    setIsMovieSaved(!isMovieSaved);
  }

  return (
    <li className="movies__card-container">
      <img className="movies__image" src={imageUrl} alt="обложка фильма" />
      <div className="movies__movie-info">
        <h4 className="movies__movie-title">{title}</h4>
        <label className="movies__movie-checkbox-container">
          <input type="checkbox" className="movies__movie-checkbox" checked={isMovieSaved} onChange={handleChangeMovieSaving} />
          <span className="movies__checkbox-slider"></span>
        </label>
      </div>
      <p className="movies__movie-duration">{duration}</p>
    </li>
  )
}

export default MoviesCard;