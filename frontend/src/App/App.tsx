import React, { Component, useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './Form/Login/login';
import Navigation from './Navigation/navigation';
import SignUp from './Form/Signup/signup';
import Dashboard from './Dashboard/dashboard'
import { User } from './user.interface'
import Home from './Home/home'
import About from './About/about';
import ChatBotPage from './ChatBot/chat-bot';
import BlogMain from './BlogMain/blog-main'
import BlogPage from './BlogPage/blog-page'

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
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' render={(props) => <Dashboard {...props} user={user} />} />
        <Route path='/login' render={(props) => <Login {...props} loginUser={loginUser} />} />
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={ChatBotPage} />
        <Route path='/about-us' component={About} />
        <Route path='/blog/:name' render={(props) => <BlogPage {...props }/>} />
        <Route exact path='/blog' component={BlogMain} />
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
