import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import playgroundLogo from '../../assets/images/playgroundLogo.jpeg';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand>
                        <img
                            src={playgroundLogo}
                            alt=""
                            width="300"
                        />{' '}
                    </Navbar.Brand>
                </Navbar>
                <br />
            </>
        );
    }
}
