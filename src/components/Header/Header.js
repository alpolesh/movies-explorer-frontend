import logo from "../../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo"/>
    </header>
  )
}

export default Header;