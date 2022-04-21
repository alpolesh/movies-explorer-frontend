import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerLinkIcon from '../../images/header__link-icon.png';
import NavigationHamburger from './NavigationHamburger';

function NavigationOthers() {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
  const updateDimension = () => {
    setWidthDisplay(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    widthDisplay < 1280 ? setIsHamburgerMenu(true) : setIsHamburgerMenu(false);
    return () => window.removeEventListener("resize", updateDimension);
  }, [widthDisplay]);
  return (
    <nav className="header__navigation-container">
      {isHamburgerMenu 
        ? 
          <NavigationHamburger />
        : 
          <div className="header__navigation">
            <Link to="/movies" className="header__link-container"><p className="header__link header__link_type_bold">Фильмы</p></Link>
            <Link to="/saved-movies" className="header__link-container"><p className="header__link">Сохранённые фильмы</p></Link>
            <Link to="/profile" className="header__link-container">
              <div className="header__link-account-container">
                <p className="header__link-account">Аккаунт</p>
                <div className="header__link-icon-container">
                  <img className="header__link-icon" src={headerLinkIcon} alt="account icon" />
                </div>
              </div>
            </Link>
          </div>
      }
    </nav>
  )
}

export default NavigationOthers;