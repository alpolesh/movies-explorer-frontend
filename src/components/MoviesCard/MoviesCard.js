import React, { useState } from 'react';
import deleteIcon from '../../images/header__navigation-close-icon.png';
import mainApi from '../../utils/MainApi';

function MoviesCard(props) {
  // const {title, duration, trailerLink, parrentComponent} = props;
  const {cardData, parrentComponent, moviesByCurrentUser} = props;
  const imageUrl = "https://api.nomoreparties.co" + cardData.image.url;
  const [movieId, setMovieId] = useState(() => {
    return moviesByCurrentUser.find((item) => item.movieId === cardData.id) ? moviesByCurrentUser.find((item) => item.movieId === cardData.id)._id : null
  });
  const [isMovieSaved, setIsMovieSaved] = useState(() => {
    return moviesByCurrentUser.find((item) => item.movieId === cardData.id) ? true : false
  });

  const jwt = localStorage.getItem('jwt');

  function handleChangeMovieSaving(e) {
    if (!isMovieSaved) {
      setIsMovieSaved(!isMovieSaved);
      mainApi.createMovie(cardData, jwt)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      setIsMovieSaved(!isMovieSaved);
      mainApi.deleteMovie(movieId, jwt)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    
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
        (<img className="movies__delete-icon" src={deleteIcon} alt="delete icon" />)
        }
      </div>
      <p className="movies__movie-duration">{cardData.duration}</p>
    </li>
  )
}

export default MoviesCard;