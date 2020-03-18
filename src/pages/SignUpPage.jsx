import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default function SignUpPage() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pwsd, setPswd]   = useState('');

    const submitValue = event => {
        event.preventDefault()
        const newUser = {
            'First Name' : fName,
            'Last Name' : lName,
            'Phone' : phone,
            'Email' : email,
            'Username' : username,
            'Password' : pwsd
        }
        console.log("User account created - details:", {newUser});
        // axios.post('http://localhost:5000/users/add/', {newUser})
        //  .then(res => {
        //      console.log(res)
        //      console.log(res.data);
        //  })

        axios.post('http://localhost:5000/users/add', {
            username: username,
            password: pwsd,
            firstName: fName,
            lastName: lName,
            phoneNumber: phone,
            emailAddress: email
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
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
                    <TextField id="standard-basic" label="Pick your username" onChange={e => setUsername(e.target.value)}  />
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