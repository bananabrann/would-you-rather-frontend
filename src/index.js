import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
// import { Route, Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

// If you want your app to wrk offline and load faster, you can change
// unregister() to register(r) below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
