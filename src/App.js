import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './header';
import Container from './container';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Container />
            </div>
        </Router>
    );
}

export default App;
