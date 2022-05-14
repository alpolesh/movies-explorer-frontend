import React, { useState } from 'react';
import Form from '../Form/Form';

function Login() {
  const [loginEmail, setLoginEmail] = useState('alpolesh@gmail.com');
  const [loginPassword, setLoginPassword] = useState('234234');

  function handleChangeLoginEmail(e) {
    setLoginEmail(e.target.value);
  }

  function handleChangLoginPassword(e) {
    setLoginPassword(e.target.value);
  }

  return (
    <section className="login">
      <Form
        title='Рады видеть!'
        buttonName='Войти'
        linkTo='/register'
        linkParagraph='Ещё не зарегистрированы?'
        linkSpan='Регистрация'
      >
        <div className="form__input-container">
          <span className="form__input-placeholder">E-mail</span>
          <input type="email" className="form__input" value={loginEmail || ''} onChange={handleChangeLoginEmail} required />
        </div>
        <div className="form__input-container">
          <span className="form__input-placeholder">Пароль</span>
          <input type="password" className="form__input" value={loginPassword || ''} onChange={handleChangLoginPassword} required />
        </div>
      </Form>
    </section>
  )
}

export default Login;