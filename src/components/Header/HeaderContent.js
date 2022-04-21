import { useLocation } from 'react-router-dom';
import logo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";

function HeaderContent() {
  const location = useLocation();
  const isContentPath = ['/movies', '/saved-movies', '/profile'].includes(location.pathname);
  return (
    isContentPath && 
      (<header className="header">
        <div className="header__header-container">
          <img className="header__logo" src={logo} alt="logo"/>
          <Navigation />
        </div>
      </header>) 
  )
}

export default HeaderContent;