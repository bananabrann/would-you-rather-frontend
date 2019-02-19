import React, { Component } from "react";
import axios from "axios";

class Play extends Component {
    constructor() {
        super();
        this.state = {
            questionData: []
        };
        this.shuffle = this.shuffle.bind(this);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    componentWillMount() {
        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    render() {
        this.shuffle(this.state.questionData);

        let question = this.state.questionData.map((question, i) => {
            while (i < 2) {
                return (
                    <h4>
                        {question.question1} OR {question.question2}
                    </h4>
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
