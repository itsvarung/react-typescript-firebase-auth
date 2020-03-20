import React from "react";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 400,
      width: "100%",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    title: {
      flexGrow: 1
    }
  })
);

const Header: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            <Typography variant="h4" className={classes.title}>
              <b>Form filling made simple.</b>
            </Typography>
            <Typography variant="subtitle1" className={classes.title}>
              The one stop source for all your form filling needs.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Header;
