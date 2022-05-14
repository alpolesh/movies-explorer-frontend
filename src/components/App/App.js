import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../constants/constants.js'
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import mainApi from '../../utils/MainApi.js';


function App() {
  
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('jwt'))

  function handleRegister(inputsData) {
    console.log('No errors, submit callback called!');
    mainApi.signUp(inputsData.name, inputsData.email, inputsData.password) 
    .then((result) => {
      console.log(result);
      handleLogin(inputsData);
      }
    )
    .catch((err) => {
      console.log(err);
    })
  }
  
  function handleLogin(inputsData) {
    console.log('No errors, submit callback called!');
    mainApi.signIn(inputsData.email, inputsData.password) 
    .then((result) => {
      console.log(result);
      setIsLoggedIn(true);
      localStorage.setItem('jwt', result.data.token);
      setToken(result.data.token);
      mainApi.getUserData(result.data.token) 
      .then((result) => {
        setCurrentUser({name: result.name, email: result.email})
      })
      }
    )
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.register}>
              {!isLoggedIn 
              ? 
              <Register 
                onRegister={handleRegister}
              />
              :
              <Redirect to={routes.movies} />
              }
            </Route>
            <Route exact path={routes.login}>
              {!isLoggedIn
              ?
              <Login 
                onLogin={handleLogin}
              />
              :
              <Redirect to={routes.movies} />
              }
            </Route>
            <ProtectedRoute 
              exact path={routes.movies}
              isLoggedIn={isLoggedIn}
              component={Movies}
            />
            {/* <Route exact path={routes.movies}>
              <Movies />
            </Route> */}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
