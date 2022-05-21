import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const {parrentComponent, isSearchedPreviously, moviesArrForRender, errorFromServer, moviesByCurrentUser, onDeleteMovie} = props;

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {isSearchedPreviously && moviesArrForRender.length === 0
        ?
        <p className="movies__no-movies">
          {errorFromServer 
          ? 
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' 
          : 
          'Ничего не найдено'}
        </p>
        :
        moviesArrForRender.map((card) => (
          <MoviesCard 
            key={parrentComponent === 'Movie' ? card.id : card._id}
            cardData={card}
            parrentComponent={parrentComponent}
            moviesByCurrentUser={moviesByCurrentUser}
            onDeleteMovie={onDeleteMovie}
          />
        ))
        }
      </ul>
    </section>
  )
}

export default MoviesCardList;