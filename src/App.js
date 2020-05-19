import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingScreen from "./pages/LandingScreen/LandingScreen"
import {BrowserRouter as  Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingScreen} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </Router>
    </div>
    
  );
}

export default App;
