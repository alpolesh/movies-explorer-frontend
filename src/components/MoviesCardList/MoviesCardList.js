import React, { useState, useEffect } from 'react';
import moviesImage1 from '../../images/moviesCardList__image_1.jpg';
import moviesImage2 from '../../images/moviesCardList__image_2.jpg';
import moviesImage3 from '../../images/moviesCardList__image_3.jpg';
import moviesImage4 from '../../images/moviesCardList__image_4.jpg';
import moviesImage5 from '../../images/moviesCardList__image_5.jpg';
import MoviesCard from '../MoviesCard/MoviesCard';

const cardsArr = [
  {
    "id": 1,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 2,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/all_tommoros_parties_33a125248d.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 3,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/blur_a43fcf463d.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 4,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/zagruzhennoe_113f557116.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 5,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/taqwacore2_2f487d2e74.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 6,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  },
  {
    "id": 7,
    "nameRu": "33 слова о дизайне",
    "duration": 61,
    "url": "/uploads/images_5bfcbf36e6.jpeg",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  }
]

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__card-list">
        {cardsArr.map((card) => (
          <MoviesCard 
            key={card.id}
            title={card.nameRu}
            duration={card.duration}
            imageUrl={card.url}
            trailerLink={card.trailerLink}
          />
        ))}
      </ul>
    </section>
  )
}

export default MoviesCardList;