import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Una from "../../images/Una.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  firstname: string;
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

//Renders a navigation bar
//Parameters:
//  - firstname: the first name of the user so you can personalise the greeting text in the nav bar
const NavBar: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "white", color: "#2C70D8", boxShadow: "none" }}
      >
        <Toolbar>
          <img src={Una} alt="logo" width={30} />
          <div className={classes.grow} />
          Hello there {props.firstname}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
