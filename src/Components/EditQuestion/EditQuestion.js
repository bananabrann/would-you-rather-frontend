import React, { Component } from "react";
// import axios from "axios";

class EditQuestion extends Component {
    render() {
        const question = this.props.questions.map((question, i) => {
            return (
                <div>
                    <form id={question._id} onSubmit={this.props.delete}>
                        <h4 key={question._id}>
                            {question.question1} OR {question.question2}
                        </h4>
                        <button>Delete</button>
                    </form>

                    <form  id={question._id} onSubmit={this.props.update}>
                        <button onClick={this.props.toggleForm}>edit </button>
                        <div
                            className={
                                this.props.formDisplay ? "" : "show-edit-field"
                            }
                        >
                            <textarea
                                rows="4"
                                cols="50"

                                name="question1"
                                className="question1"
                                // onChange={this.handleChange}
                            />
                            <textarea
                                rows="4"
                                cols="50"

                                name="question2"
                                className="question2"
                                // onChange={this.handleChange}
                            />
                            <br />

                            <button>Submit Edits</button>

                        </div>
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
