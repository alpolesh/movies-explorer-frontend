import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import useForm from '../useForm/useForm';
import { validateRegisterForm } from '../../utils/utils';
import mainApi from '../../utils/MainApi';

function Register({ onRegister, errorFromServer, setErrorFromServer }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isInputed
  } = useForm(onRegister, validateRegisterForm);

  useEffect(() => {
    setErrorFromServer('');
  }, [])

  return (
    <section className="register">
      <Form 
        title='Добро пожаловать!'
        buttonName='Зарегистрироваться'
        linkTo='/login'
        linkParagraph='Уже зарегистрированы?'
        linkSpan='Войти'
        handleSubmit={handleSubmit}
        errors={errors}
        isInputed={isInputed}
        errorFromServer={errorFromServer}
      >
        <div className="form__input-container">
          <span className="form__input-placeholder">Имя</span>
          <input type="text" className="form__input" name="name" value={values.name || ''} onChange={handleChange} required />
          {errors.name && (
            <div className="form__error-container">
              <p className="form__error-message">{errors.name} </p>
            </div>
          )}
        </div>
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

export default Register;