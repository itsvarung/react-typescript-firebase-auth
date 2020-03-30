import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { H1, H2, AccentColorText, BackgroundCard } from "./styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    textField: {
      padding: "30px 0 0 0",

      "& > *": {
        width: "100%"
      }
    },
    iconButton: {
      padding: 10
    }
  })
);

const Header: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <BackgroundCard>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <H1>
                  Form filling made <AccentColorText>simple.</AccentColorText>
                </H1>
              </Grid>
              <Grid item xs={12}>
                <H2>The one stop source for all your form filling needs</H2>
              </Grid>
              <Grid item xs={12}>
                <form
                  className={classes.textField}
                  noValidate
                  autoComplete="on"
                >
                  <TextField
                    id="outlined-basic"
                    label="What would you like to set up today?"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton type="submit">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BackgroundCard>
    </Grid>
  );
};
export default Header;
