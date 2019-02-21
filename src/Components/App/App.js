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
            questionData: [],
            selectedEditQuestion1: "",
            selectedEditQuestion2: ""
        };
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log("Play: Component is mounting");
        axios.get(url + "/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    toggleForm(evt) {
        evt.preventDefault();
        this.setState({
            formDisplay: !this.state.formDisplay
        });
    }

    updateQuestion(evt) {
        evt.preventDefault();
        const { questionData } = this.state;
        const questionId = evt.target.id;
        axios
            .put(url + "/edit", {
                data: {
                    question1: this.state.selectedEditQuestion1,
                    question2: this.state.selectedEditQuestion2,
                    id: questionId
                }
            })
            .then(() => {
                let updated = this.state.questionData.map((q, i) => {
                    if (q._id === questionId) {
                        q.question1 = this.state.question1;
                        q.question2 = this.state.question2;
                    }
                    return q;
                });
                this.setState({ questionData: updated });
            })
            .catch(err => {
                console.log(err);
            });
    }

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

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
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
                    render={() => <Play questions={this.state.questionData} />}
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
                            handleChange={this.handleChange}
                        />
                    )}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
