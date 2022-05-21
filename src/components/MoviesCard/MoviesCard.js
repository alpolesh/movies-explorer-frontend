import React, { useState } from 'react';
import deleteIcon from '../../images/header__navigation-close-icon.png';
import mainApi from '../../utils/MainApi';
import {createMovie, deleteMovie} from '../../utils/utils';

function MoviesCard(props) {
  const jwt = localStorage.getItem('jwt');
  const {cardData, parrentComponent, moviesByCurrentUser, onDeleteMovie} = props;
  const imageUrl = parrentComponent === `Movies` ? "https://api.nomoreparties.co" + cardData.image.url : cardData.image;

  const [isMovieSaved, setIsMovieSaved] = useState(() => {
    return moviesByCurrentUser.find((item) => item.movieId === cardData.id) ? true : false
  });

  function getMovieId() {
    if (parrentComponent === `Movies`) {
      return moviesByCurrentUser.find((item) => item.movieId === cardData.id) ? moviesByCurrentUser.find((item) => item.movieId === cardData.id)._id : null
    } else {
      return cardData._id;
    }
  }

  function handleChangeMovieSaving(e) {
    if (!isMovieSaved) {
      setIsMovieSaved(!isMovieSaved);
      createMovie(cardData, jwt);
    } else {
      setIsMovieSaved(!isMovieSaved);
      deleteMovie(getMovieId(), jwt);
    }
  }

  async function handleDeleteMovie() {
    onDeleteMovie(getMovieId());
  }

  return (
    <li className="movies__card-container">
      <img className="movies__image" src={imageUrl} alt="обложка фильма" />
      <div className="movies__movie-info">
        <h4 className="movies__movie-title">{cardData.nameRU}</h4>
        {parrentComponent === 'Movies' 
        ?
        (<label className="movies__movie-checkbox-container">
          <input type="checkbox" className="movies__movie-checkbox" checked={isMovieSaved} onChange={handleChangeMovieSaving} />
          <span className="movies__checkbox-slider"></span>
        </label>)
        :
        (<img className="movies__delete-icon" src={deleteIcon} onClick={handleDeleteMovie} alt="delete icon" />)
        }
      </div>
      <p className="movies__movie-duration">{cardData.duration}</p>
    </li>
  )
}

export default MoviesCard;