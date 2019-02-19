import React, { Component } from "react";
import axios from "axios";

class Play extends Component {
    constructor() {
        super();
        this.state = {
            question1: "",
            question2: "",
            previousQuestions: [],
            display: []
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

        console.log("Play: Component is mounting");

        // let randomizer =

        axios.get("http://localhost:3001/play")
        .then(json => {
            this.setState({
                display: json.data
            }, () => {
                console.log("Second argument of setState reached")
                var item = items[Math.floor(Math.random()*items.length)];
                console.log(item)
            }
            )
            .then(result => {
                // let r = 2
                console.log("Result:")
                console.log(result)


                // this.setState({
                //     question1: result.data[r].question1,
                //     question2: result.data[r].question2
                // });
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
