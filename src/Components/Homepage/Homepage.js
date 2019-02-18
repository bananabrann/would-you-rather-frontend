import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div>
                <p>Hello from Homepage!</p>
                <Link to="/play">
                    <button>Play!</button>
                </Link>
                <Link to="/stats">
                    <button>Stats</button>
                </Link>
                <Link to="/options">
                    <button>Options</button>
                </Link>

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
