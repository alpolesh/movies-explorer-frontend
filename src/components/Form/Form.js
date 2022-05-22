import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Form(props) {
  const {title, buttonName, linkTo, linkParagraph, linkSpan, handleSubmit, errors, isInputed, errorFromServer} = props;
  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <Header />
        <h2 className="form__title">{title}</h2>
        {props.children}
        <div className="form__error-container">
          <p className="form__error-message">{errorFromServer}</p>
        </div>
        <button type="submit" className={(Object.keys(errors).length === 0 && isInputed) ? `form__button-edit` : `form__button-edit form__button-edit_inactive`} disabled={Object.keys(errors).length !== 0}>{buttonName}</button>
      </form>
      <p className="form__link-container">
        {linkParagraph}
        <Link to={linkTo} style={{ textDecoration: 'none', margin: '16px auto' }}><span className="form__link">{linkSpan}</span></Link>
      </p>
    </>
  )
}

export default Form;