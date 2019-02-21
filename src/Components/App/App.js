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
import Options from "../Options/Options";
import { Route } from "react-router-dom";

const url = "http://localhost:3001";

class App extends Component {
    constructor() {
        super();
        this.state = {
            formDisplay: false,
            questionData: []
        };
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this)
    }

    componentDidMount() {
        console.log("Play: Component is mounting");
        axios.get(url + "/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    toggleForm(evt) {
        evt.preventDefault()
        this.setState({
          formDisplay: !this.state.formDisplay
        });
      }

      updateQuestion(evt) {
        evt.preventDefault();
        const { questionData } = this.state;
        const questionId = evt.target.id;
        // this.setState({
        //     questionData: questionData.filter(q => q._id !== questionId)
        // });
        // this.setState({
        //     formDisplay: true
        // })

        axios
            .put(url + "/edit", {
                // data: { question1: evt.target.question1 }
            })
            .catch(err => {
                console.log(err);
            });
    }

    //  Frontend : 

    deleteQuestion(evt) {
        evt.preventDefault();
        const { questionData } = this.state;
        const questionId = evt.target.id;
        this.setState({
            questionData: questionData.filter(q => q._id !== questionId)
        });
        axios
            .delete(url + "/edit", {
                data: { id: questionId }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container app-box">
                <Navbar />
                <Route exact path="/" render={() => <Homepage />} />
                <Route
                    exact
                    path="/play"
                    render={() => <Play 
                                    questions={this.state.questionData} />}
                />
                <Route exact path="/stats" render={() => <Stats />} />
                <Route exact path="/options" render={() => <Options />} />
                <Route exact path="/create" render={() => <NewQuestion />} />
                <Route
                    exact
                    path="/edit"
                    render={() => (
                        <EditQuestion
                            questions={this.state.questionData}
                            delete={this.deleteQuestion}
                            update={this.updateQuestion}
                            formDisplay={this.state.formDisplay}
                            toggleForm={this.toggleForm}
                        />
                    )}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
