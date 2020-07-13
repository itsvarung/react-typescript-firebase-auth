import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Una from "../../images/Una.svg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    history.push("/account");
  };

  async function logout() {
    try {
      await firebase.logout();
      history.replace("/login");
    } catch (error) {
      alert(error.message);
    }
  }

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
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <AccountCircle />
            <h3>{props.firstname}</h3>
            <MenuItem onClick={handleClick}>My Details</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
