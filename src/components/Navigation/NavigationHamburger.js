import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLinkIcon from '../../images/header__link-icon.png';
import hamburgerIcon from '../../images/header__navigation-hamburger-icon.png';
import closeIcon from '../../images/header__navigation-close-icon.png';

function NavigationHamburger() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const changeHamburgerMenuState = () => { setIsHamburgerMenuOpen(!isHamburgerMenuOpen) }
  return (
    isHamburgerMenuOpen 
    ?
      (<>
        <div className="header__burger-background"></div>
        <img className="header__navigation-close-icon" src={closeIcon} alt="close icon" onClick={changeHamburgerMenuState} />
        <div className="header__navigation header__navigation_menu_hamburger">
          <Link to="/" className="header__link-container header__link-container_menu_hamburger"><p className="header__link header__link_type_bold header__link_menu_hamburger">Главная</p></Link>
          <Link to="/movies" className="header__link-container header__link-container_menu_hamburger"><p className="header__link header__link_type_bold header__link_menu_hamburger">Фильмы</p></Link>
          <Link to="/saved-movies" className="header__link-container header__link-container_menu_hamburger"><p className="header__link header__link_menu_hamburger">Сохранённые фильмы</p></Link>
          <Link to="/profile" className="header__link-container header__link-container_menu_hamburger">
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