import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { H1 } from '../../components/header/styles'
import { useHistory } from "react-router-dom";
import { GlobalStyle } from '../../styling/global';
import { TextBox, FullButton, Paper } from "../../styling/genericStyles"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

const LoginPage = () => {

    const history = useHistory()

    function handleLoginClick() {
        history.push("/")
    }

    function handleRegisterClick() {
        history.push("/signup")
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const testUName = "admin"
    const testPWord = "Password"

    const submitValue = () => {
        const frmdetails = {
            'Username': username,
            'Password': password
        }

        console.log("Atempted login - Username: ", username, "Password: ", password)

        if ((username === testUName) && (password === testPWord)) {
            handleLoginClick()
        }
        else {
            console.log("Incorrect account details")
        }

    }

    return (
        <BrowserRouter>
            <React.Fragment>
                <GlobalStyle />
                <Paper>
                <Grid item xs={12}>
                    <H1>
                        Login
                </H1>
                </Grid>
                <Grid>
                    <button onClick={handleLoginClick} >
                        Login
                    </button>

                    <button onClick={handleRegisterClick}>
                        Sign Up
                    </button>
                </Grid>
                <Grid>
                    <Paper>
                    <TextField fullWidth label="Username" placeholder="Enter your password" onChange={e => setUsername(e.target.value)} />
                    <TextField fullWidth label="Password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                    <FullButton onClick={submitValue}> Login </FullButton>
                    </Paper>
                </Grid>
                </Paper>

            </React.Fragment>
        </BrowserRouter>
    )

}

export default LoginPage