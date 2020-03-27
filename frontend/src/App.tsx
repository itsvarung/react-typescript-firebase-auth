import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import FormCard from "./components/card";
import { GlobalStyle } from "./styling/global";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory
} from "react-router-dom";

import LoginPage from './pages/LoginPage'
import { Button } from "@material-ui/core";
import SignUpPage from "./pages/SignUpPage";
import ContactUs from "./pages/ContactUs"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: "1200px"
    }
  })
);

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}


const Home = () => {
  const classes = useStyles();

  const history = useHistory()

  function handleClick() {
    history.push("/login")
  }

function handleContactUsClick() {
  history.push("/contactus")
}

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Button onClick={handleClick}>
            Login
        </Button>
        <Button onClick={handleContactUsClick}>
          Contact Us
        </Button>
      <Grid container spacing={0} className={classes.root}>
        <Header />
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <FormCard
                    title="University Checklist"
                    description="Start university with your best foot forward"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormCard
                    title="Explorer Checklist"
                    description="Passport? Check. We’re ready for take off."
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormCard
                    title="Entertainment Checklist"
                    description="Netflix and chill up and ready in 5 minutes."
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default App;
