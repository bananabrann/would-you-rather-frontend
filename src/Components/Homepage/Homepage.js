import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./Homepage.css";

class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <p>Hello from Homepage!</p>
                <div className="btn-group" role="group" aria-label="Basic">
                    <Link to="/play">
                        <button className="btn btn-primary">Play!</button>
                    </Link>
                    <Link to="/stats">
                        <button className="btn btn-primary">Stats</button>
                    </Link>
                    <Link to="/options">
                        <button className="btn btn-primary">Options</button>
                    </Link>
                </div>

                <Route
                    path="/path"
                    exact
                    render={routerProps => <Redirect to="/play" />}
                />
                <Route
                    path="/stats"
                    exact
                    render={routerProps => <Redirect to="/stats" />}
                />
                <Route
                    path="/options"
                    exact
                    render={routerProps => <Redirect to="/options" />}
                />
            </div>
        );
    }
}

export default Homepage;
