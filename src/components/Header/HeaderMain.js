import { useLocation, Link } from 'react-router-dom';
import logo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";
import { routes } from '../../constants/constants.js';

function HeaderMain() {
  const location = useLocation();
  const isMainPath = location.pathname === '/';
  return (
    isMainPath && 
      (<header className="header header_route_main">
        <div className="header__header-container">
          <Link to={routes.main}><img className="header__logo" src={logo} alt="logo"/></Link>
          <Navigation />
        </div>
      </header>) 
  )
}

export default HeaderMain;