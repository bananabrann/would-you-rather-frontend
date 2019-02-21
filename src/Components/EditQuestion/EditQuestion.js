import React, { Component } from "react";
// import axios from "axios";

class EditQuestion extends Component {


    render() {
        const question = this.props.questions.map((question, i) => {
            return (
                <div>
                    <form id={question._id} onSubmit={this.props.delete}>

<<<<<<< delete-debug
                        <h4 key={question._id}>{question.question1} OR {question.question2}</h4>

                        <button >Delete</button>
                        <button>edit </button>
=======

>>>>>>> dev

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
