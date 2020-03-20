import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitValue = () => {
        const frmdetails = {
            'Username': username,
            'Password': password
        }


        console.log("User log in - details:", frmdetails);

        axios.get('http://localhost:5000/users/', {
            params: {
                username: "test1"
            }
        })
            .then(function (response) {
                console.log(response.data.username);
            })
            .catch(function (error) {
                console.log(error);
            });

            
            // const dbUsername = mongoose.find({name: username})
            // const dbPassword = mongoose.find({password: password})

            // if ((dbUsername === username) && (dbPassword === password)) {
            //     console.log("User authenticated")
                
            // } else {
            //     console.log("invalid login details")
                
            // }

            

        }


        return (
            <div className={classes.root}>
                <Typography variant="h4" align="center">
                    This is the Login page
            </Typography>
                <Grid align="center">
                    <Grid item xl={12}>
                        <TextField id="standard-basic" label="Enter your username" onChange={e => setUsername(e.target.value)} />
                    </Grid>
                    <Grid item xl={12}>
                        <TextField id="standard-basic" type="password" label="Enter your password" onChange={e => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xl={12}>
                        {/* <Link to="./LandingPage"> */}
                        <Button variant="contained" color="primary" onClick={submitValue} >
                            Login
                        </Button>
                        {/* </Link> */}
                    </Grid>
                    <Grid item xl={12}>
                        <Link to="./SignUp">
                            {/* <Typography variant="h6" align="center"> */}
                            Not registered? Click here to sign up
                        {/* </Typography> */}
                        </Link>
                    </Grid>


                </Grid>
            </div>
        )
    }
