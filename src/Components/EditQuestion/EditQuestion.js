import React, { Component } from "react";
import axios from "axios";

class EditQuestion extends Component {
    constructor() {
        super();
        this.state = {
            questionData: []
        };
    }
    componentWillMount() {
        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    render() {
        let question = this.state.questionData.map((question, i) => {
            return (
                <div>
                    <button>Edit </button><button>Delete </button>
                    <h4>
                        {question.question1} OR {question.question2}
                    </h4>
                </div>
            );
        });
        return (
            <div className="container">
                <p>Hello from DeleteQuestion!</p>
                <p>{question}</p>
            </div>
        );
    }
}

export default EditQuestion;
