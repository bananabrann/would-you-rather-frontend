import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

class Options extends Component {
    render() {
        return (
            <div className="container">
                <p>Hello from Options!</p>
                <Link to="/create">
                
                <button className="btn btn-primary">Create</button>
                </Link>
                <Link to="/edit">
                <button className="btn btn-primary">Edit</button>
                </Link>
            </div>
        );
    }
}

export default Options;