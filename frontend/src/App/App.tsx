import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom'
import Login from './Form/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Login/signup';
import Dashboard from './Dashboard/Dashboard'
import { User } from './user.interface'
import Home from './Form/Home/home'

function App() {
  const [user, setUser] = useState(null as User | null)

  const loginUser = (_user: User) => {
    setUser(_user)
  }

  console.log(user)

  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} />.
      {/*// @ts-ignore*/}
      {/*<Route path='/login' render={(props: RouteComponentProps<any>) => <Login {...props} loginUser={loginUser}/>}/>*/}
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
