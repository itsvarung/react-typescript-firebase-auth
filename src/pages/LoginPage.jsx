import React from 'react'
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


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

export default function LoginPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h4" align="center">
                This is the Login page
            </Typography>
            <Grid align="center">
                <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="Enter your username" />
                </Grid>

                <Grid item xl={12}>
                    <TextField id="standard-basic" label="Enter your password" />
                </Grid>

                <Grid item xl={12}>

                    <Link to="./LandingPage">
                        <Button variant="contained" color="primary">
                            Login
                     </Button>
                    </Link>
                    <Grid item xl={12}>
                        <Link to="./SignUp">
                        {/* <Typography variant="h6" align="center"> */}
                            Not registered? Click here to sign up
                        {/* </Typography> */}
                        </Link>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}