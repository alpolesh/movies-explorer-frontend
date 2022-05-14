import { useLocation, Link } from 'react-router-dom';
import logo from "../../images/header__logo.svg";
import { routes } from '../../constants/constants.js';

function HeaderAuth() {
  const location = useLocation();
  const isContentPath = ["/register", "/login"].includes(location.pathname);
  return (
    isContentPath && 
      (<header className="header header_without-paddings">
        <div className="header__header-container">
          <Link to={routes.main}><img className="header__logo" src={logo} alt="logo"/></Link>
        </div>
      </header>) 
  )
}

export default HeaderAuth;