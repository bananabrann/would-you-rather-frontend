import React, { Component } from 'react';

class NewQuestion extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="addTitle" >Would You Rather:</h1>
                <form method="post" className="addNewQuestions">
                    <textarea rows='4' cols= '50' className="question[question1]" /><br />
                    <h1> OR </h1>
                    <textarea rows='4' cols= '50' className="question[question2]" /><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default NewQuestion;