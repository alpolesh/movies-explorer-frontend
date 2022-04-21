import { useLocation } from 'react-router-dom';
import logo from "../../images/header__logo.svg";

function HeaderAuth() {
  const location = useLocation();
  const isContentPath = ["/register", "/login"].includes(location.pathname);
  return (
    isContentPath && 
      (<header className="header header_without-paddings">
        <div className="header__header-container">
          <img className="header__logo" src={logo} alt="logo"/>
        </div>
      </header>) 
  )
}

export default HeaderAuth;