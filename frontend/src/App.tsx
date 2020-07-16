import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage";

import { GlobalStyle } from "./styling/global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
} from "react-router-dom";

import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import FormPage from "./pages/form";

import { auth, AuthUserContext, isInitialized } from "./services/firebase";
import AccountDetails from "./pages/accountdetails";

export default function App() {
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);
  const [firebaseInitialized, setFirebaseInialized] = useState<
    boolean | unknown
  >(false);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
  });

  useEffect(() => {
    isInitialized().then((val: boolean | unknown) => {
      setFirebaseInialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/form" component={FormPage} />
          <Route path="/account" component={AccountDetails} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  ) : (
    <div id="loader"></div>
  );
}
