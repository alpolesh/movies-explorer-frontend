import React, { useState, useContext } from 'react';
import deleteIcon from '../../images/header__navigation-close-icon.png';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {getDurationInHoursFormat} from '../../utils/utils';
import mainApi from '../../utils/MainApi';

function MoviesCard(props) {
  const jwt = localStorage.getItem('jwt');
  const {savedFilmsDictionary, setSavedFilmsDictionary} = useContext(CurrentUserContext);
  const {cardData, parrentComponent} = props;
  const imageUrl = "https://api.nomoreparties.co" + cardData.image.url;
  const trailerLink = cardData.trailerLink;
  const duration = getDurationInHoursFormat(cardData.duration);

  const [isMovieSaved, setIsMovieSaved] = useState(() => {
    return Object.keys(savedFilmsDictionary).includes(cardData.id.toString()) ? true : false
  });

  function createMovie(cardData, jwt) {
    mainApi.createMovie(cardData, jwt)
    .then((res) => {
      setSavedFilmsDictionary((savedFilmsDictionary) => ({...savedFilmsDictionary, [cardData.id]: res.data._id}))
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  function deleteMovie(movieId, jwt) {
    mainApi.deleteMovie(movieId, jwt)
    .then((res) => {
      setSavedFilmsDictionary((savedFilmsDictionary) => {
        const state = {...savedFilmsDictionary}
        delete state[cardData.id];
        return state;
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleChangeMovieSaving(e) {
    if (!isMovieSaved) {
      setIsMovieSaved(!isMovieSaved);
      createMovie(cardData, jwt);
    } else {
      setIsMovieSaved(!isMovieSaved);
      deleteMovie(savedFilmsDictionary[cardData.id], jwt);
    }
  }

  function handleImageClick() {
    window.open(trailerLink, '_blank');
  }

  return (
    <li className="movies__card-container">
      <img className="movies__image" src={imageUrl} alt="обложка фильма" onClick={handleImageClick}/>
      <div className="movies__movie-info">
        <h4 className="movies__movie-title">{cardData.nameRU}</h4>
        {parrentComponent === 'Movies' 
        ?
        (<label className="movies__movie-checkbox-container">
          <input type="checkbox" className="movies__movie-checkbox" checked={isMovieSaved} onChange={handleChangeMovieSaving} />
          <span className="movies__checkbox-slider"></span>
        </label>)
        :
        (<img className="movies__delete-icon" src={deleteIcon} onClick={handleChangeMovieSaving} alt="delete icon" />)
        }
      </div>
      <p className="movies__movie-duration">{duration}</p>
    </li>
  )
}

export default MoviesCard;