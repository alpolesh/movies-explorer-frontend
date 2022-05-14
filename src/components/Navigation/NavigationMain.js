import { Link } from 'react-router-dom';
import { routes } from '../../constants/constants.js';

function NavigationMain() {
  return (
    <nav className="header__navigation-container">
      <div className="header__navigation">
        <Link to={routes.register} className="header__link-container"><p className="header__link header__link_route_main">Регистрация</p></Link>
        <Link to={routes.login} className="header__link-container"><button className="header__link-button header__link-button_route_main">Войти</button></Link>
      </div>
    </nav>
  )
}

export default NavigationMain;