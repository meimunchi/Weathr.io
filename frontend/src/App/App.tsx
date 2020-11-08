import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom'
import Login from './Form/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Login/signup';
import { User } from './user.interface'


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
      // @ts-ignore
      <Route path='/login' render={(props: RouteComponentProps<any>) => <Login {...props} loginUser={loginUser}/>}/>
    </BrowserRouter>
  );
}

export default App;
