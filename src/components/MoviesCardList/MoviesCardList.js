import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const {parrentComponent, moviesCardsArr} = props;
  return (
    <section className="movies">
      <ul className="movies__card-list">
        {moviesCardsArr.map((card) => (
          <MoviesCard 
            key={card.id}
            title={card.nameRU}
            duration={card.duration}
            imageUrl={card.image.url}
            trailerLink={card.trailerLink}
            parrentComponent={parrentComponent}
          />
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;