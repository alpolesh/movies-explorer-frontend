import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Register() {
  const [registerName, setRegisterName] = useState('Андрей');
  const [registerEmail, setRegisterEmail] = useState('alpolesh@gmail.com');
  const [registerPassword, setRegisterPassword] = useState('234234');
  const [isRegisterError, setIsRegisterError] = useState(false);

  function handleChangeRegisterName(e) {
    setRegisterName(e.target.value);
  }

  function handleChangeRegisterEmail(e) {
    setRegisterEmail(e.target.value);
  }

  function handleChangeRegisterPassword(e) {
    setRegisterPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <Header />
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__input-container">
          <span className="register__input-placeholder">Имя</span>
          <input type="text" className="register__input" value={registerName || ''} onChange={handleChangeRegisterName} minLength="2" maxLength="50" />
        </div>
        <div className="register__input-container">
          <span className="register__input-placeholder">E-mail</span>
          <input type="email" className="register__input" value={registerEmail || ''} onChange={handleChangeRegisterEmail} />
        </div>
        <div className="register__input-container">
          <span className="register__input-placeholder">Пароль</span>
          <input type="password" className="register__input" value={registerPassword || ''} onChange={handleChangeRegisterPassword} />
        </div>
        <div className="register__error-container">
          <p className="register__error-message">{isRegisterError ? 'Что-то пошло не так...' : ''} </p>
        </div>
        <button type="submit" className="register__button-edit">Зарегистрироваться</button>
      </form>
      <p className="register__login-container">
        Уже зарегистрированы?
        <Link to="/login" style={{ textDecoration: 'none', margin: '16px auto' }}><span className="register__link">Войти</span></Link>
      </p>
    </section>
  )
}

export default Register;