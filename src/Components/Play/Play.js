import React, { Component } from "react";
import axios from "axios";

class Play extends Component {
    constructor() {
        super();
        this.state = {
            question1: "",
            question2: "",
            previousQuestions: []
        };
    }

    // userClicked() {

        // Add 1 to the databaase count of the one that was clicked

        // Back-end side: Question.find({_id: theselectedone.id}).then(count++)
        // Front-end side: playController.clickedOne

        // Add both questions to the previousQuestions array.
    // }
    componentDidMount() {
        // Code that randomizes the selected and stores it into a variable called i



        // if (prev question === prev question) go back and try again
        // let i = "";
        // let i2 = "";

        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({
                question1: json.data[0].content,
                question2: json.data[1].content
            });
        });
    }

    render() {
        return (
            <div className="container">
                <p>Hello from Play!</p>
                <div className="question1">
                    <h3>{this.state.question1}</h3>
                </div>
                <div className="question2">
                    <h3>{this.state.question2}</h3>
                </div>
            </div>
        );
    }
}

export default Play;
