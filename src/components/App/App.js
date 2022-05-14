import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { routes } from '../../constants/constants.js'
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.register}>
            <Register 
              // onRegisterNewUser={handleRegisterNewUser}
            />
          </Route>
          <Route exact path={routes.login}>
            <Login 
              // onLogin={handleLogin}
            />
          </Route>
          <Route exact path={routes.movies}>
            <Movies />
          </Route>
          <Route exact path={routes.savedMovies}>
            <SavedMovies />
          </Route>
          <Route exact path={routes.profile}>
            <Profile />
          </Route>
          <Route exact path={routes.main}>
            <Main />
          </Route>
          <Route path="/">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
