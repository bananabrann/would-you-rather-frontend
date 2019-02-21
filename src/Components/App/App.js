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
            questionData: []
        };
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.destroy = this.destroy.bind(this);
    }
    componentDidMount() {
        console.log("Play: Component is mounting");
        axios.get(url + "/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    // need to take the current state, with all the questions
    // iterate through and remove the current selected question, return and array

    destroy(evt) {
        evt.preventDefault();
        console.log("hi");
        axios
            .delete("http://localhost:3001/edit", {
                data: { id: evt.id }
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
            .delete("http://localhost:3001/edit", {
                data: { id: questionId }
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteQuestion(evt) {
        evt.preventDefault();
        const questionBank = this.state.questionData
        // const { questionData } = this.state
        const i = questionBank.indexOf(evt)
        const updatedBank = questionBank.slice( 0, i).concat(questionBank.slice(i + 1, questionBank.length))
        // questionBank = without(tempApts, apt);
        
        this.setState({
            questionData: updatedBank
        });
        axios

    // deleteQuestion(evt) {
    //     evt.preventDefault();

    //     this.setState({
    //         questionData: this.state.questionData.filter((q) => q.id !== evt.id)
    //       })
    //     axios
    //         .delete("http://localhost:3001/edit", {
    //             data: {id: evt.id }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    //   }

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
                            destroy={this.state.destroy}
                            delete={this.deleteQuestion}
                            questions={this.state.questionData}
                        />
                    )}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
