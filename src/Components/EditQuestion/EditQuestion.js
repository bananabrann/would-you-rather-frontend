import React, { Component } from "react";
import axios from "axios";

class EditQuestion extends Component {

    // destroy(evt) {
    //     console.log("We're gonna DESTROY!!!!");
    //     // evt.preventDefault()
    //     axios
    //         .delete("http://localhost:3001/edit", { evt })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    destroy(evt) {
        // evt.preventDefault();

        axios
            .delete("http://localhost:3001/edit", { id: evt.id })
            .catch(err => {
                console.log(err);
            });
    }

    // handleClick() {
    //     evt.preventDefault()
    //     destroy()
    // }
    // <form id={question._id} onSubmit={this.destroy}>
    
    render() {
        console.log("EditQuestion: rendered");
        let question = this.props.questions.map((question, i) => {
            return (
                <div>
                    {/* <h1>{question._id}</h1> */}
                    <form id={question._id} onSubmit={this.destroy}>

                        <h4>{question.question1} OR {question.question2}</h4>

                        <button >Delete</button>
                        {/* onClick={() => this.destroy(question)} */}
                        <button>edit </button>

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
