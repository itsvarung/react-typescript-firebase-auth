import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { H1 } from '../components/header/styles'
import { useHistory } from "react-router-dom";
import { GlobalStyle } from '../styling/global';

const SignUpPage = () => {

    const history = useHistory()

    function handleSignUpClick() {
        history.push("/")
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <H1>
                Sign Up
            </H1>
            <button onClick={handleSignUpClick} >
                Register
            </button>

        </BrowserRouter>
    )

}

export default SignUpPage