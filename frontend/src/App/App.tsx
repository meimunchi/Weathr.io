import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Form/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Login/signup';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login}/>
    </BrowserRouter>
  );
}

export default App;
