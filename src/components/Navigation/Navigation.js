import { Link, useRouteMatch } from 'react-router-dom';
import headerLinkIcon from '../../images/header__link-icon.png';

function Navigation() {
  const isMain = useRouteMatch({path: "/"});
  return (
    <nav className="header__navigation-container">
      {isMain.isExact ?
        (<div className="header__navigation">
          <Link to="/register" style={{textDecoration: 'none'}}><p className="header__link header__link_route_main">Регистрация</p></Link>
          <Link to="/login" style={{textDecoration: 'none'}}><button className="header__link-button header__link-button_route_main">Войти</button></Link>
        </div>) :
        (<div className="header__navigation">
          <Link to="/movies" style={{textDecoration: 'none'}}><p className="header__link header__link_type_bold">Фильмы</p></Link>
          <Link to="/saved-movies" style={{textDecoration: 'none'}}><p className="header__link">Сохранённые фильмы</p></Link>
          <Link to="/profile" style={{textDecoration: 'none'}}>
            <div className="header__link-account-container">
              <p className="header__link-account">Аккаунт</p>
              <div className="header__link-icon-container">
                <img className="header__link-icon" src={headerLinkIcon} alt="account icon" />
              </div>
            </div>
          </Link>
        </div>)}
    </nav>
  )
}

export default Navigation;