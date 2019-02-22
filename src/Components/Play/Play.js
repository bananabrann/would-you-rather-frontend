import React, { Component } from "react";


class Play extends Component {


    render() {
        
        let shuffle = (a) => {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
    
        shuffle(this.props.questions);

        let question = this.props.questions.map((question, i) => {
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
                </div>
            </div>
        );
    }
}

export default Play;
