import logo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__header-container">
        <img className="header__logo" src={logo} alt="logo"/>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;