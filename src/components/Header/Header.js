import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <header className="header_route_main">
            <div className="header__header-container">
              <img className="header__logo" src={logo} alt="logo"/>
              <Navigation />
            </div>
          </header>
        </Route>
        <Route path="/">
          <header className="header">
            <div className="header__header-container">
              <img className="header__logo" src={logo} alt="logo"/>
              <Navigation />
            </div>
          </header>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Header;