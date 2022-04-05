import { useLocation } from 'react-router-dom';
import logo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";

function HeaderMain() {
  const location = useLocation();
  const isMainPath = location.pathname === '/';
  return (
    isMainPath && 
      (<header className="header header_route_main">
        <div className="header__header-container">
          <img className="header__logo" src={logo} alt="logo"/>
          <Navigation />
        </div>
      </header>) 
  )
}

export default HeaderMain;