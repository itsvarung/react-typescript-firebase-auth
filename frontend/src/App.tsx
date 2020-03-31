import React from "react";
import HomePage from "./pages/homepage";

import { GlobalStyle } from "./styling/global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory
} from "react-router-dom";

import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import ContactUs from "./pages/contact-us-page";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
