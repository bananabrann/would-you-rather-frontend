import React, { Component } from 'react';
import axios from 'axios'
const url = 'https://would-you-rather-backend.herokuapp.com/'

class NewQuestion extends Component {
    constructor(){
        super()

        this.handleChange = this.handleChange.bind(this)
        this.submit=this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
        console.log(e.target.value)
        axios.post(url + 'create', this.state)
          .catch((err) => {
            console.log(err)
          })
    }
    handleChange(evt) {
        const variable = evt.target.name
        this.setState({[variable]: evt.target.value })
    }

    render() {
        return (
            <div className="container">
                <h1 className="addTitle" >Would You Rather:</h1>
                <form  onSubmit= {this.submit} className="addNewQuestions">
                    <textarea rows='4' cols= '50' name="question1" className="question1" onChange={this.handleChange} /><br />
                    <h1> OR </h1>
                    <textarea rows='4' cols= '50' name="question2" className="question2" onChange={this.handleChange} /><br />
                    <input type="submit" value="poop" name="submit"/>
                </form>

            </div>
        );
    }
}

export default NewQuestion;