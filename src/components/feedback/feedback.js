import React, { Component } from 'react';
import '../../css/styleSheet.css';

export default class Feedback extends Component {
    render() {
        return (
            <div>
                <h1>Feedback Form</h1>
                <form>
                    <div class='row'>
                        <div class='col-25'>
                            <label for='comments'>Comments</label>
                        </div>
                        <div class='col-75'>
                            <textarea id='comments' placeholder='Enter your comments here.' style={{height:'200px'}} /> 
                        </div> 
                    </div>
                    <div class='row'>
                        <input type='submit' value ='Submit' />
                    </div>
                </form>
            </div>
        );
    }
}