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
    componentDidMount() {
        console.log("Play: Component is mounting");
        axios.get("http://localhost:3001/play").then(json => {
            this.setState({ questionData: json.data });
        });
    }

    destroy(evt) {
        console.log("We're gonna DESTROY!!!!");
        // evt.preventDefault()
        axios
            .delete("http://localhost:3001/edit", { evt })
            .catch(err => {
                console.log(err);
            });
    }

    // handleClick() {
    //     evt.preventDefault()
    //     destroy()
    // }

    render() {
        console.log("EditQuestion: rendered");
        let question = this.state.questionData.map((question, i) => {
            return (
                <div>
                    {/* <h1>{question._id}</h1> */}

                    <h4>{question.question1} OR {question.question2}</h4>

                    {/* <button onClick={this.destroy(question._id)}>Delete</button> */}
                    <button onClick={() => this.destroy(question)} >Delete</button>

                    <button>edit </button>
                    {/* <form onSubmit={this.destroy(question._id)}>
                        <input type="submit" value="Delete" />
                    </form>
                    <form>
                        <input type="submit" value="Edit" />
                    </form> */}
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
