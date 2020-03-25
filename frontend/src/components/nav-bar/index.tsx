import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Una from "../../images/Una.svg";

const NavBar = () => {
  return (
    <div>
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
