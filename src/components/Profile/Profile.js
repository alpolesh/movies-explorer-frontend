import React, { useState, useContext, useEffect } from 'react';
import useForm from '../useForm/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validateProfileForm } from '../../utils/utils';
import mainApi from '../../utils/MainApi.js';
import Header from '../Header/Header';



function Profile() {
  const currentUser = useContext(CurrentUserContext);
  const jwt = localStorage.getItem('jwt');
  const [ErrorFromServer, setErrorFromServer] = useState('');
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isInputed
  } = useForm(onChangeProfile, validateProfileForm);

  useEffect(() => {
    setErrorFromServer('');
  }, [])

  function onChangeProfile(imputsData) {
    mainApi.updateProfile(imputsData, jwt)
    .then((result) => {
      console.log(result);
      }
    )
    .catch((err) => {
      console.log(err);
      setErrorFromServer(err);
    })
  }

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__input-container">
            <span className="profile__input-placeholder">Имя</span>
            <input type="text" className="profile__input" name="name" value={values.name || ''} onChange={handleChange} placeholder={currentUser.name} />
          </div>
          {errors.name && (
          <div className="form__error-container">
            <p className="form__error-message">{errors.name} </p>
          </div>
          )}
          <div className="profile__input-container">
            <span className="profile__input-placeholder">E-mail</span>
            <input type="email" className="profile__input" name="email" value={values.email || ''} onChange={handleChange} placeholder={currentUser.email} />
          </div>
          {errors.email && (
            <div className="form__error-container">
              <p className="form__error-message">{errors.email} </p>
            </div>
          )}
          <button type="submit" className={(Object.keys(errors).length === 0 && isInputed) ? `profile__button-edit` : `profile__button-edit profile__button-edit_disabled`} disabled={Object.keys(errors).length !== 0 || Object.values(values).join('') === ''}>Редактировать</button>
        </form>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile;

