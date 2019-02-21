import React, { Component } from "react";
// import axios from "axios";

class EditQuestion extends Component {

    // destroy(evt) {
    //     evt.preventDefault();

    //     axios
    //         .delete("http://localhost:3001/edit", {
    //             data: {id: evt.id }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    render() {
        console.log("EditQuestion: rendered");
        const question = this.props.questions.map((question, i) => {
            return (
                <div>
                    {/* <h1>{question._id}</h1> */}
                    <form id={question._id} onSubmit={this.props.delete}>

                        <h4 key={question._id}>{question.question1} OR {question.question2}</h4>

                        <button >Delete</button>
                        {/* onClick={() => this.destroy(question)} */}
                        <button>edit </button>

                    </form>
                </div>
            );
        });
        return (
            <div className="container">
                <h2>Hello from DeleteQuestion!</h2>
                <div>{question}</div>
            </div>
        );
    }
}

export default EditQuestion;
