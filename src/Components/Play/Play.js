import React, { Component } from "react";
import axios from "axios";

class Play extends Component {
    constructor() {
        // let randomNum = 2;

        super();
        this.state = {
            questionData: [],
            // seed: 0
            randomNum: ""
        };

        // this.randomizeMe = this.randomizeMe.bind(this);
        // this.giveRandomNum = this.giveRandomNum.bind(this);
        // this.giveQuestion = this.giveQuestion.bind(this);
    }

    // giveRandomNum() {
    //     console.log("giveRandomNum called");

    //     this.setState({
    //         randomNum: randomNum
    //     });
    //     // console.log(randomNum);
    //     // return randomNum;
    // }

    // giveQuestion() {
    //     giveRandomNum();
    //     this.setState({
    //         currentQuestion: this.questionData[this.state.randomNum]
    //     });
    // }

    // userClicked() {

    // Add 1 to the databaase count of the one that was clicked

    // Back-end side: Question.find({_id: theselectedone.id}).then(count++)
    // Front-end side: playController.clickedOne

    // Add both questions to the previousQuestions array.
    // }

    // randomizeMe() {
    //     console.log("randomizeMe called");
    //     let randomizedNum = Math.floor(
    //         Math.random() * this.state.questionData.length
    //     );
    //     console.log(`randomizedNum is ${randomizedNum}`);
    //     this.setState({
    //         seed: randomizedNum
    //     });
    //     console.log(`this.state.seed is ${this.state.seed}`);
    // }

    componentWillMount() {
        console.log("Play: Component is mounting");
        axios
            .get("http://localhost:3001/play")
            .then(json => {
                this.setState({ questionData: json.data });
                // console.log(this.state.questionData[1].question1);
                // this works ^^^
            })
            .then(() => {
                // let randomNum = Math.floor(Math.random() * this.state.questionData.length)
                let randomNum = 2;
                console.log(`the randomNum is ${randomNum}`);
                // Returns correct ^^^

                this.setState({ randomNum: randomNum });
                console.log(
                    `the state of randomNum is now ${this.setState.randomNum}`
                );
                // Returns undefined ^^^
            });
    }

    render() {
        // let question = this.state.questionData.map((question, i) => {
        //     return <h2>{question.question1}</h2>;
        // });
        // let questionLength = this.state.questionData.length

        // while ((i < 2) && (!question.includes(previousQuestion) )) 
        let question = this.state.questionData.map((question, i) => {
            while ((i < 2)) {
                return (
                    <h4>{question.question1} OR {question.question2}</h4>
                );
            }
        });

        return (
            <div className="container">
                <p>Hello from Play!</p>
                <div className="question1">
                    <p>{question}</p>
                </div>
                <div className="question2">q2</div>
            </div>
        );
    }
}

export default Play;
