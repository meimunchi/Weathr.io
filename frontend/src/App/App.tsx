import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom'
import Login from './Form/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Login/signup';
import Dashboard from './Dashboard/Dashboard'
import { User } from './user.interface'
import Home from './Form/Home/home'
import Axios from 'axios'

function App() {
  const [user, setUser] = useState(null as User | null)

  const loginUser = (_user: User) => {
    localStorage.setItem('user', JSON.stringify(_user));
    setUser(_user);
  }

  // TODO: Figure out problem with credentials
  useEffect(() => {
    async function getUser() {
      // const response = await Axios.get(`${process.env.REACT_APP_PROXY}/user`, {  withCredentials: true });
      // console.log(response)
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    }

    getUser()
  }, [])

  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' render={(props) => <Dashboard {...props} user={user}/>} />
      <Route path='/login' render={(props) => <Login {...props} loginUser={loginUser}/>}/>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
