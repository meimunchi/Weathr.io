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
import ChatBot from './ChatBot/chat-bot';
import BlogMain from './Blog/BlogMain/blog-main'
import BlogPage from './Blog/BlogPage/blog-page'
import Axios from 'axios'
import BlogEditorial from './Blog/BlogEditorial/blog-editorial'
import BlogEdit from './Blog/BlogEdit/blog-edit'

function App() {
  const [user, setUser] = useState(null as User | null)

  const loginUser = async (_user: User) => {
    setUser(_user);
  }

  const logoutUser = async () => {
    await Axios.get(`${process.env.REACT_APP_PROXY}/logout`, { withCredentials: true })
    setUser(null)
  }

  useEffect(() => {
    async function getUser() {
      const response = await Axios.get(`${process.env.REACT_APP_PROXY}/user`, { withCredentials: true })
      setUser(response.data)
    }

    getUser()
  }, [])

  return (
    <BrowserRouter>
      <Navigation user={user} logoutUser={logoutUser}/>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' render={(props) => <Dashboard {...props} user={user} />} />
        <Route path='/login' render={(props) => <Login {...props} loginUser={loginUser} />} />
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={ChatBot} />
        <Route path='/about-us' component={About} />
        <Route path='/blog/:id' render={(props) => <BlogPage {...props }/>} />
        <Route exact path='/blog' component={BlogMain} />
        { user && user.is_admin && <Route path='/blog-edit/:id' render={(props) => <BlogEdit {...props}/> } /> }
        { user && user.is_admin && <Route exact path='/blog-edit' render={(props) => <BlogEditorial {...props} user={user}/> } /> }
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
