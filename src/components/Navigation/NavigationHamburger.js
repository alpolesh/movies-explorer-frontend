import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLinkIcon from '../../images/header__link-icon.png';
import hamburgerIcon from '../../images/header__navigation-hamburger-icon.png';
import closeIcon from '../../images/header__navigation-close-icon.png';
import { routes } from '../../constants/constants.js';

function NavigationHamburger() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const changeHamburgerMenuState = () => { setIsHamburgerMenuOpen(!isHamburgerMenuOpen) }
  let location = useLocation();
  return (
    isHamburgerMenuOpen 
    ?
      (<>
        <div className="header__burger-background"></div>
        <img className="header__navigation-close-icon" src={closeIcon} alt="close icon" onClick={changeHamburgerMenuState} />
        <div className="header__navigation header__navigation_menu_hamburger">
          <Link to={routes.main} className={`header__link-container header__link-container_menu_hamburger ${location.pathname === routes.main ? `header__link-container_active` : ``}`}><p className="header__link header__link_type_bold header__link_menu_hamburger">Главная</p></Link>
          <Link to={routes.movies} className={`header__link-container header__link-container_menu_hamburger ${location.pathname === routes.movies ? `header__link-container_active` : ``}`}><p className="header__link header__link_type_bold header__link_menu_hamburger">Фильмы</p></Link>
          <Link to={routes.savedMovies} className={`header__link-container header__link-container_menu_hamburger ${location.pathname === routes.savedMovies ? `header__link-container_active` : ``}`}><p className="header__link header__link_menu_hamburger">Сохранённые фильмы</p></Link>
          <Link to={routes.profile} className={`header__link-container header__link-container_menu_hamburger ${location.pathname === routes.profile ? `header__link-container_active` : ``}`}>
            <div className="header__link-account-container">
              <p className="header__link-account header__link-account_menu_hamburger">Аккаунт</p>
              <div className="header__link-icon-container">
                <img className="header__link-icon" src={headerLinkIcon} alt="account icon" />
              </div>
            </div>
          </Link>
        </div>
      </>)
    :
      (<img className="header__navigation-hamburger-icon" src={hamburgerIcon} alt="hamburger's menu icon" onClick={changeHamburgerMenuState} />)
  )
}

export default NavigationHamburger;