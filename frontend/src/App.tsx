import React from "react";
import "./App.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import NavBar from "./components/nav-bar";
import Header from "./components/header";
import FormCard from "./components/card";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container spacing={0}>
        <Header />
        <Grid item xs={12}>
          <FormCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
