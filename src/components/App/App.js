import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
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
          <Route exact path="/register">
            <Register 
              // onRegisterNewUser={handleRegisterNewUser}
            />
          </Route>
          <Route exact path="/login">
            <Login 
              // onLogin={handleLogin}
            />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
