import React, { Component } from "react";
import axios from "axios";

class Play extends Component {
    constructor() {

        // let randomNum = 2;

        super();
        this.state = {
            questionData: [],
            // seed: 0
            randomNum: ''
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
        
        let randomNum = 2;
        let test = this.state.questionData.map( (question, i)=> {
            return (
             <h2>{question.question1}</h2>
            )
        }).limit(2)
        return (
            <div className="container">
                <p>Hello from Play!</p>
                <div className="question1">
                    <p>{test}</p>

                    <p>
                        {/* {this.state.questionData.map((item, i) => (
                            <li key={i}>{item.question1}</li>
                        ))} */}
                    </p>
                </div>
                <div className="question2">q2</div>
            </div>
        );
    }
}

export default Play;
