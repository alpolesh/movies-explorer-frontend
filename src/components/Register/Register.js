import React, { useState } from 'react';
import Form from '../Form/Form';

function Register() {
  const [registerName, setRegisterName] = useState('Андрей');
  const [registerEmail, setRegisterEmail] = useState('alpolesh@gmail.com');
  const [registerPassword, setRegisterPassword] = useState('234234');

  function handleChangeRegisterName(e) {
    setRegisterName(e.target.value);
  }

  function handleChangeRegisterEmail(e) {
    setRegisterEmail(e.target.value);
  }

  function handleChangeRegisterPassword(e) {
    setRegisterPassword(e.target.value);
  }

  return (
    <section className="register">
      <Form 
        title='Добро пожаловать!'
        buttonName='Зарегистрироваться'
        linkTo='/login'
        linkParagraph='Уже зарегистрированы?'
        linkSpan='Войти'
      >
        <div className="form__input-container">
          <span className="form__input-placeholder">Имя</span>
          <input type="text" className="form__input" value={registerName || ''} onChange={handleChangeRegisterName} minLength="2" maxLength="50" required />
        </div>
        <div className="form__input-container">
          <span className="form__input-placeholder">E-mail</span>
          <input type="email" className="form__input" value={registerEmail || ''} onChange={handleChangeRegisterEmail} required />
        </div>
        <div className="form__input-container">
          <span className="form__input-placeholder">Пароль</span>
          <input type="password" className="form__input" value={registerPassword || ''} onChange={handleChangeRegisterPassword} minLength="4" required />
        </div>
      </Form>
    </section>
  )
}

export default Register;