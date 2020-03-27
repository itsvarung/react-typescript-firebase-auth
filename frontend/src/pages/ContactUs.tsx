import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    useHistory
  } from "react-router-dom";

const ContactUs = () => {
    const history = useHistory()

    function handleClick(){
        history.push("/")
    }

    return (
        <React.Fragment>
        <h1>
            Contact us page
        </h1>

        <button onClick={handleClick}>
            Main Page
        </button>
        </React.Fragment>
    )
}

export default ContactUs;