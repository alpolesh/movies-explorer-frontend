import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <div className="saved-movies-wrapper">
        <Header />
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;