import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Form(props) {
  const {title, buttonName, linkTo, linkParagraph, linkSpan} = props;
  const [isFormError, setIsFormError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Header />
        <h2 className="form__title">{title}</h2>
        {props.children}
        <div className="form__error-container">
          <p className="form__error-message">{isFormError ? 'Что-то пошло не так...' : ''} </p>
        </div>
        <button type="submit" className="form__button-edit">{buttonName}</button>
      </form>
      <p className="form__link-container">
        {linkParagraph}
        <Link to={linkTo} style={{ textDecoration: 'none', margin: '16px auto' }}><span className="form__link">{linkSpan}</span></Link>
      </p>
    </>
  )
}

export default Form;