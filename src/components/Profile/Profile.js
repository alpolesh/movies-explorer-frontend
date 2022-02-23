import React, { useState } from 'react';
import Header from '../Header/Header';

function Profile() {
  const [profileName, setProfileName] = useState('Андрей');
  const [profileEmail, setProfileEmail] = useState('alpolesh@gmail.com');

  function handleChangeProfileName(e) {
    setProfileName(e.target.value);
  }

  function handleChangeProfileEmail(e) {
    setProfileEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {profileName}!</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__input-container">
            <span className="profile__input-placeholder">Имя</span>
            <input type="text" className="profile__input" value={profileName || ''} onChange={handleChangeProfileName} minLength="2" maxLength="50" />
          </div>
          <div className="profile__input-container">
            <span className="profile__input-placeholder">E-mail</span>
            <input type="email" className="profile__input" value={profileEmail || ''} onChange={handleChangeProfileEmail} />
          </div>
          <button type="submit" className="profile__button-edit">Редактировать</button>
        </form>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile;

