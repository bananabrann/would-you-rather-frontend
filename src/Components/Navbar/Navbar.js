import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar">
                    <h1 className="navbar-brand would-you-rather-logo">Would You Rather?!</h1>
                    <Link to="/"><button className="navbar-item btn home-btn">Home</button></Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;
