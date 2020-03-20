import React from 'react'
import { Typography } from '@material-ui/core'
import AppMasterLayout from './AppMasterLayout'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Card'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  export default function LandingPage() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <Typography variant="h4">Form filling made simple</Typography>
          <Typography variant="h6">The one stop source for all your form filling needs</Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card backgroundColor={"#2a2e2b"} textColor={"white"} title={"University Checklist"} description={"Start University with your best foot forward"} />
          </Grid>
          <Grid item xs>
            <Card backgroundColor={"#2a2e2b"} textColor={"white"} title={"Explorer Checklist"} description={"Passport? Check. We're ready for take off."} />
          </Grid>
          <Grid item xs>
            <Card backgroundColor={"#2a2e2b"} textColor={"white"} title={"Entertainment Checklist"} description={"Netflix and chill up and ready in 5 minutes."} />
          </Grid>
        </Grid>
        
            <Typography variant="h4">University Checklist</Typography>
            <Typography variant="h6">Start University with your best foot forward by getting all of the paper work out of the way early!</Typography>
            <Grid container spacing={3}>
            <Grid item xs>
            {/* <Paper className={classes.paper}> */}
                <Card backgroundColor={"darkgreen"} textColor={"white"} title={"Lloyds Bank"} description={"Open a student account with 0.7% APR"} />
            {/* </Paper> */}
          </Grid>
          <Grid item xs>
            {/* <Paper className={classes.paper}> */}
                <Card backgroundColor={"darkblue"} textColor={"white"} title={"Doctors"} description={"Swap your registered GP Surgery"} />
            {/* </Paper> */}
          </Grid>
          <Grid item xs>
            {/* <Paper className={classes.paper}> */}
                <Card backgroundColor={"red"} textColor={"white"} title={"Netflix"} description={"Apply for a Netflix account"} />
            {/* </Paper> */}
          </Grid>
          <Grid item xs>
            {/* <Paper className={classes.paper}> */}
                <Card backgroundColor={"green"} textColor={"white"} title={"Spotify"} description={"Spotify Premium for only £4.99 a month"} />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }