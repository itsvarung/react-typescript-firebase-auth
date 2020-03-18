import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function SignUpPage() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [pwsd, setPswd]   = useState('');

    const submitValue = () => {
        const frmdetails = {
            'First Name' : fName,
            'Last Name' : lName,
            'Phone' : phone,
            'Email' : email,
            'Username' : userName,
            'Password' : pwsd
        }
        console.log("User account created - details:", frmdetails);
    }
    return (
        <div>
            <Typography variant="h4" align="center">
                Welcome! Sign Up for all the great benefits
            </Typography>
            <Grid align="center">
            <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="First Name" onChange={e => setfName(e.target.value)}  />
                </Grid>
                <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="Last name" onChange={e => setlName(e.target.value)}  />
                </Grid>
                <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="Mobile number" onChange={e => setPhone(e.target.value)}  />
                </Grid>
                <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="Email address" onChange={e => setEmail(e.target.value)}  />
                </Grid>

                <Grid item xl={12} justify="center">
                    <TextField id="standard-basic" label="Pick your username" onChange={e => setUserName(e.target.value)}  />
                </Grid>
                <Grid item xl={12}>
                    <TextField id="standard-basic" type="password" label="Pick your password"  onChange={e => setPswd(e.target.value)}/>
                </Grid>
                <Grid item xl={12}>
                    <Link to="./LandingPage">
                        <Button variant="contained" color="primary" onClick={submitValue}>
                            Sign Up
                     </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}