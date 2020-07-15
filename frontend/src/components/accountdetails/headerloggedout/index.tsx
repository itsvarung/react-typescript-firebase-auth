import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { H1, H2, AccentColorText, BackgroundCard } from "./styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import * as Styles from "./styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { useHistory } from "react-router-dom";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    textField: {
      padding: "30px 0 0 0",
      "& > *": {
        width: "100%",
      },
    },
    iconButton: {
      padding: 10,
      color: "white",
    },
    input: {
      color: "white",
    },
  })
);

const HeaderLoggedOut: React.FC<Props> = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <Grid item xs={12}>
      <BackgroundCard>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <H1>You don't seem to be logged in!</H1>
              </Grid>
              <Grid item xs={12}>
                <H2>
                  Please log in or create an account with us to view your
                  detials.
                </H2>
              </Grid>
              <Styles.ButtonsWrapper>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: fade("#FFFFFF", 0.8),
                    color: "#2d70d8",
                    height: "50px",
                  }}
                  onClick={() => {
                    handleSignIn();
                  }}
                >
                  Sign In
                </Button>
              </Styles.ButtonsWrapper>
              <Styles.ButtonsWrapper>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: fade("#FFFFFF", 0.8),
                    color: "#2d70d8",
                    height: "50px",
                  }}
                  onClick={() => {
                    handleSignUp();
                  }}
                >
                  Register
                </Button>
              </Styles.ButtonsWrapper>
            </Grid>
          </Grid>
        </Grid>
      </BackgroundCard>
    </Grid>
  );
};
export default HeaderLoggedOut;
