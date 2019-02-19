import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>WOULD YOU RATHER?!</h1>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        );
    }
}

export default Navbar;
