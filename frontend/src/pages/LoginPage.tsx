import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { H1 } from '../components/header/styles'
import { useHistory } from "react-router-dom";
import { GlobalStyle } from '../styling/global';

const LoginPage = () => {

    const history = useHistory()

    function handleLoginClick() {
        history.push("/")
    }

    function handleRegisterClick() {
        history.push("/signup")
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <H1>
                This is a login page
        </H1>
            <button onClick={handleLoginClick} >
                Login
            </button>

            <button onClick={handleRegisterClick}>
                Register
            </button>

        </BrowserRouter>
    )

}

export default LoginPage