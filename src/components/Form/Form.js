import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Form(props) {
  const {title, buttonName, linkTo, linkParagraph, linkSpan, handleSubmit, errors, isInputed} = props;
  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <Header />
        <h2 className="form__title">{title}</h2>
        {props.children}
        <button type="submit" className={(Object.keys(errors).length === 0 && isInputed) ? `form__button-edit` : `form__button-edit form__button-edit_inactive`}>{buttonName}</button>
      </form>
      <p className="form__link-container">
        {linkParagraph}
        <Link to={linkTo} style={{ textDecoration: 'none', margin: '16px auto' }}><span className="form__link">{linkSpan}</span></Link>
      </p>
    </>
  )
}

export default Form;