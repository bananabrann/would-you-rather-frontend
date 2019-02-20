import React, { Component } from "react";
import axios from "axios";

class EditQuestion extends Component {
    constructor() {
        console.log("EditQuestion: constructor");
        super();
        this.state = {
            questionData: []
        };
        this.destroy = this.destroy.bind(this);
    }
    componentWillMount() {
        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    destroy(questionId) {
        console.log("We're gonna DESTROY!!!!");
        // evt.preventDefault()
        axios
            .delete("http://localhost:3001/edit", { id: questionId })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log("EditQuestion: rendered");
        let question = this.state.questionData.map((question, i) => {
            return (
                <div>
                    {/* <h1>{question._id}</h1> */}

                    {/* <button onClick={this.destroy(question._id)}>
                            Delete
                        </button> */}
                    <form onSubmit={this.destroy(question._id)}>
                        <h4>
                            {question.question1} OR {question.question2}
                        </h4>{" "}
                        */}
                        {/* <button>edit </button> */}
                        <input type="submit" value="Delete" />
                    </form>
                    <form>
                        <input type="submit" value="Edit" />
                    </form>
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
