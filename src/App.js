import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>    
            </BrowserRouter>
      );
    }
}

export default App;
