import React, { Component } from 'react';
import '../../css/styleSheet.css';

export default class Feedback extends Component {
    render() {
        return (
            <div>
                <div className='col'>
                    <form>
                        <div className='row'>
                            <h1>Feedback Form</h1>
                        </div>
                        <div className='row'>
                            <div className="radio-check">
                                <label className='label-75'>
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
                                <label className='label-75'>
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
                                <label className='label-75'>
                                    <input
                                        type="radio"
                                        name="mood"
                                        value="other"
                                        className="radio-check-input"
                                    />
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-75'>
                                <label className='label' htmlFor='comments'>Comments:</label>
                            </div>
                            <div className='col-75'>
                                <textarea id='comments' placeholder='Enter your comments here.' style={{height:'200px'}} /> 
                            </div> 
                        </div>
                        <div className='row-25'>
                            <div className='col-25'>
                                <input type='submit' value ='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}