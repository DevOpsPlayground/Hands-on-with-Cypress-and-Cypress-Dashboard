import React, { Component } from 'react';
import NavBar from '../../components/navBar/navBar';
import Feedback from '../../components/feedback/feedback';

export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Feedback />
            </>
        );
    }
};
