import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <div className="saved-movies-wrapper">
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default SavedMovies;