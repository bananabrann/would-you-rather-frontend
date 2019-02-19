import React, { Component } from 'react';

class NewQuestion extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="addTitle" >Would You Rather:</h1>
                <form action="/create" method="post" className="addNewQuestions">
                    <textarea rows='4' cols= '50' name="question1" className="question1" /><br />
                    <h1> OR </h1>
                    <textarea rows='4' cols= '50' name="question2" className="question2" /><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}

export default NewQuestion;