import React, { useState } from 'react';
import deleteIcon from '../../images/header__navigation-close-icon.png';

function MoviesCard(props) {
  const {title, duration, trailerLink, parrentComponent} = props;
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
        {parrentComponent === 'Movies' 
        ?
        (<label className="movies__movie-checkbox-container">
          <input type="checkbox" className="movies__movie-checkbox" checked={isMovieSaved} onChange={handleChangeMovieSaving} />
          <span className="movies__checkbox-slider"></span>
        </label>)
        :
        (<img className="movies__delete-icon" src={deleteIcon} alt="delete icon" />)
        }
      </div>
      <p className="movies__movie-duration">{duration}</p>
    </li>
  )
}

export default MoviesCard;