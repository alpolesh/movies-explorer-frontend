import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="header__navigation-container">
      <BrowserRouter>
        <Switch>
          <Route path="/movies">
            <div className="header__navigation">
              <Link to="/movies" style={{textDecoration: 'none'}}><p className="header__link">Фильмы</p></Link>
              <Link to="/saved-movies" style={{textDecoration: 'none'}}><p className="header__link">Сохранённые фильмы</p></Link>
              <Link to="/profile" style={{textDecoration: 'none'}}><p className="header__link-account">Аккаунт</p></Link>
            </div>
          </Route>
          <Route exact path="/">
            <div className="header__navigation">
              <Link to="/signup" style={{textDecoration: 'none'}}><p className="header__link">Регистрация</p></Link>
              <Link to="/signin" style={{textDecoration: 'none'}}><button className="header__link-button">Войти</button></Link>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </nav>
  )
}

export default Navigation;