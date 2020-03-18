import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppMasterLayout from './pages/AppMasterLayout'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AppBar from './components/AppBar'
import LandingPage from './pages/LandingPage'

// import AppMasterLayout from './pages/AppMasterLayout'
// import LoginPage from './pages/LoginPage'
// import SignUpPage from './pages/SignUpPage'
// import AppBar  from './components/AppBar';
// import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <Router>
      <div>
        {/* <AppBar /> */}
      </div>
      <Route path="/" exact component ={LoginPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/login" component ={LoginPage} />
      <Route path="/LandingPage" component={LandingPage} />
    </Router>
  )
}