import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useForm from '../useForm/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validateProfileForm } from '../../utils/utils';
import mainApi from '../../utils/MainApi.js';
import Header from '../Header/Header';
import { routes } from '../../constants/constants.js'

function Profile({ setCurrentUser, setIsLoggedIn }) {
  const {currentUser, setSavedFilmsDictionary} = useContext(CurrentUserContext);
  const jwt = localStorage.getItem('jwt');
  const [messageFromServer, setMessageFromServer] = useState('');
  let history = useHistory();
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(onChangeProfile, validateProfileForm, currentUser);

  function checkButtonDisability() {
    if (Object.keys(errors).length !== 0 || Object.values(values).join('') === '' || (currentUser.name === values.name && currentUser.email === values.email)) {
      return true;
    } else return false;
  }

  useEffect(() => {
    setMessageFromServer('');
  }, [values])

  function onChangeProfile(inputsData) {
    const newUserData = {};
    Object.assign(newUserData, inputsData);
    for (let key in newUserData) {
      if (newUserData[key] === '') {
        delete newUserData[key];
      }
    }
    mainApi.updateProfile(newUserData, jwt)
    .then((result) => {
      setCurrentUser({name: result.name, email: result.email})
      setMessageFromServer('Изменения прошли успешно!');
      }
    )
    .catch((err) => {
      console.log(err);
      setMessageFromServer(err);
    })
  }

  function handleExitFromAccount() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchMovieTitle');
    localStorage.removeItem('searchShortMovieIsChecked');
    setSavedFilmsDictionary({});
    setIsLoggedIn(false);
    history.push(routes.main);
  }

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          {errors.name && (
          <div className="form__error-container">
            <p className="form__error-message">{errors.name} </p>
          </div>
          )}
          <div className="profile__input-container">
            <span className="profile__input-placeholder">Имя</span>
            <input type="text" className="profile__input" name="name" value={values.name || ''} onChange={handleChange} />
          </div>
          {errors.email && (
            <div className="form__error-container">
              <p className="form__error-message">{errors.email} </p>
            </div>
          )}
          <div className="profile__input-container">
            <span className="profile__input-placeholder">E-mail</span>
            <input type="email" className="profile__input" name="email" value={values.email || ''} onChange={handleChange} />
          </div>
          <div className="profile__message-from-server-container">
            <p className="profile__message-from-server">{messageFromServer}</p>
          </div>
          <button type="submit" className={!checkButtonDisability() ? `profile__button-edit` : `profile__button-edit profile__button-edit_disabled`} disabled={checkButtonDisability()}>Редактировать</button>
        </form>
        <button className="profile__button-exit" onClick={handleExitFromAccount}>Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile;

