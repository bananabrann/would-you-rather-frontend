import React, { Component } from "react";


class Play extends Component {
    constructor() {
        super() 
        this.setState({

        })
        this.clickQuestion = this.clickQuestion.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }


    clickQuestion() {
        console.log("hi!")
        // add the count to the question

        // display the next button

        //shuffle the array so a new one is at the front


    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    

    render() {
        

        // OLD WAY:
        
        // let shuffle = (a) => {
        //     for (let i = a.length - 1; i > 0; i--) {
        //         const j = Math.floor(Math.random() * (i + 1));
        //         [a[i], a[j]] = [a[j], a[i]];
        //     }
        //     return a;
        // }

        this.shuffle(this.props.questionData);
        console.log(this.props.questionData)

        let question = this.props.questionData.map((question, i) => {
            while (i < 1) {
                return (
                    <div className="question-space card">
                        <span className="optionA" onClick={this.clickQuestion}><h4>{question.question1}</h4></span>
                        <span><h1 className="big-or">OR</h1></span>
                        <span className="optionB"><h4>{question.question2}</h4></span>
                    </div>
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
