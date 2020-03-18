import React from 'react'
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function SignUpPage() {
    return (
        <div>
            <Typography variant="h4" align="center">
                Sign Up
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
                            Sign Up
                     </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}