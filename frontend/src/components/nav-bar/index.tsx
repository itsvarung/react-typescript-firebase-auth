import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Una from "../../images/Una.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      color: "textPrimary"
    }
  })
);

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <img src={Una} alt="logo" width={30} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
