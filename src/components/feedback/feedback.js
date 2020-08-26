import React, { Component } from 'react';
import { postFeedback } from '../../modules/feedbackApi';
import '../../css/styleSheet.css';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: '',
            comments: '',
        };
        this.other = false;
        this.handleMoodUpdate = this.handleMoodUpdate.bind(this);
        this.handleCommentsUpdate = this.handleCommentsUpdate.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    handleMoodUpdate(input) {
        console.log(input.target.value);
        this.setState({mood: input.target.value});
    }

    handleCommentsUpdate(input) {
        console.log(input.target.value);
        this.setState({comments: input.target.value});
    }

    sendFeedback(event) {
        event.preventDefault()
        postFeedback(this.state);
    }

    render() {
        return (
            <div>
                <div className="col">
                    <form onSubmit={this.sendFeedback}>
                        <div className="row">
                            <h1>Feedback Form</h1>
                        </div>
                        <div className="row" value={this.state.mood} onChange={this.handleMoodUpdate}>
                            <div className="radio-check">
                                <label className="label-75">
                                    <input
                                        type="radio"
                                        name="mood"
                                        value="happy"
                                        className="radio-check-input"

                                    />
                                    Happy
                                </label>
                            </div>
                            <div className="radio-check">
                                <label className="label-75">
                                    <input
                                        type="radio"
                                        name="mood"
                                        value="sad"
                                        className="radio-check-input"
                                    />
                                    Sad
                                </label>
                            </div>
                            <div className="radio-check">
                                <label className="label-75">
                                    <input
                                        type="radio"
                                        name="mood"
                                        value="other"
                                        className="radio-check-input"
                                    />
                                    Other
                                </label> 
                            </div>
                            { document.querySelector('input[value="other"]:checked')  ? <textarea id="other-mood"></textarea> : null }
                        </div>
                        <div className="row">
                            <div className="col-75">
                                <label className="label" htmlFor="comments">Comments:</label>
                            </div>
                            <div className="col-75">
                                <textarea id="comments" placeholder="Enter your comments here." style={{height:"200px"}} value={this.state.comments} onChange={this.handleCommentsUpdate} /> 
                            </div> 
                        </div>
                        <div className="row-25">
                            <div className="col-25">
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
