import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Form/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Login/signup';
import Home from './Form/Home/home'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
