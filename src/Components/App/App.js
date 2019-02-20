import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Homepage from "../Homepage/Homepage";
import Stats from "../Stats/Stats";
import Play from "../Play/Play";
import NewQuestion from "../NewQuestion/NewQuestion";
import EditQuestion from "../EditQuestion/EditQuestion";
import Options from "../Options/Options"
import { Route, Link, Redirect } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            questionData: []
        };

    }

    componentDidMount() {
        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    render() {
        return (
            <div className="container app-box">
                <Navbar />
                <Route exact path="/" render={() => <Homepage />} />
                <Route exact path="/play" render={() => <Play
                    questions={this.state.questionData}
                />} />
                <Route exact path="/stats" render={() => <Stats />} />
                <Route exact path="/options" render={() => <Options />} />
                <Route exact path="/create" render={() => <NewQuestion />} />
                <Route exact path="/edit" render={() => <EditQuestion />} />
                <Footer />
            </div>
        );
    }
}

export default App;
