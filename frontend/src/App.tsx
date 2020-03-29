import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import FormCard from "./components/card";
import { GlobalStyle } from "./styling/global";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: "1200px"
    }
  })
);
function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
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
  );
}

export default App;
