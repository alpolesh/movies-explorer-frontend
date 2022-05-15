import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import useForm from '../useForm/useForm';
import { validateLoginForm } from '../../utils/utils';

function Login({ onLogin, errorFromServer, setErrorFromServer }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isInputed
  } = useForm(onLogin, validateLoginForm);

  useEffect(() => {
    setErrorFromServer('');
  }, [])

  return (
    <section className="login">
      <Form
        title='Рады видеть!'
        buttonName='Войти'
        linkTo='/register'
        linkParagraph='Ещё не зарегистрированы?'
        linkSpan='Регистрация'
        handleSubmit={handleSubmit}
        errors={errors}
        isInputed={isInputed}
        errorFromServer={errorFromServer}
      >
        <div className="form__input-container">
          <span className="form__input-placeholder">E-mail</span>
          <input type="email" className="form__input" name="email" value={values.email || ''} onChange={handleChange} required />
          {errors.email && (
            <div className="form__error-container">
              <p className="form__error-message">{errors.email} </p>
            </div>
          )}
        </div>
        <div className="form__input-container">
          <span className="form__input-placeholder">Пароль</span>
          <input type="password" className="form__input" name="password" value={values.password || ''} onChange={handleChange} required />
          {errors.password && (
            <div className="form__error-container">
              <p className="form__error-message">{errors.password} </p>
            </div>
          )}
        </div>
      </Form>
    </section>
  )
}

export default Login;