import React, { useState } from 'react';

function Profile() {
  // const [movieTitle, setMovieTitle] = useState('');

  // function handleChangeMovieTitle(e) {
  //   setMovieTitle(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <span className="profile__input-placeholder">Имя</span>
          <input type="text" className="profile__input" minLength="2" maxLength="50" readOnly />
        </div>
        <div className="profile__input-container">
          <span className="profile__input-placeholder">E-mail</span>
          <input type="email" className="profile__input" readOnly />
        </div>
        <button className="profile__button-edit">Редактировать</button>
      </form>
      <button type="submit" className="profile__button-exit">Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;