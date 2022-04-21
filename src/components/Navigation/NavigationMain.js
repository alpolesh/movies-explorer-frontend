import { Link } from 'react-router-dom';

function NavigationMain() {
  return (
    <nav className="header__navigation-container">
      <div className="header__navigation">
        <Link to="/register" className="header__link-container"><p className="header__link header__link_route_main">Регистрация</p></Link>
        <Link to="/login" className="header__link-container"><button className="header__link-button header__link-button_route_main">Войти</button></Link>
      </div>
    </nav>
  )
}

export default NavigationMain;