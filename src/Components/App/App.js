import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Homepage from "../Homepage/Homepage";
import Stats from "../Stats/Stats";
import Play from "../Play/Play";
import { Route, Link, Redirect } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="container app-box">
                <Navbar />
                    <Route exact path="/" render={() => <Homepage />} />
                    <Route exact path="/play" render={() => <Play />} />
                    <Route exact path="/stats" render={() => <Stats />} />
                <Footer />
            </div>
        );
    }
}

export default App;