import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const {parrentComponent, filteredMoviesArr, moviesArrForRender, errorFromBeatFilm} = props;
  

  return (
    <section className="movies">
      <ul className="movies__card-list">
        {filteredMoviesArr.length !==0 
        ?
        moviesArrForRender.map((card) => (
          <MoviesCard 
            key={card.id}
            title={card.nameRU}
            duration={card.duration}
            imageUrl={card.image.url}
            trailerLink={card.trailerLink}
            parrentComponent={parrentComponent}
          />
        ))
        :
        <p className="movies__no-movies">
          {errorFromBeatFilm 
          ? 
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' 
          : 
          'Ничего не найдено'}
        </p>
        }
      </ul>
    </section>
  )
}

export default MoviesCardList;