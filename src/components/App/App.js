import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          {/* <Route path="/register">
            <Register 
              onRegisterNewUser={handleRegisterNewUser}
            />
          </Route>
          <Route path="/login">
            <Login 
              onLogin={handleLogin}
            />
          </Route> */}
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
