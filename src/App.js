import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingScreen from "./pages/LandingScreen/LandingScreen"
import WindowsScreen from "./pages/WindowsScreen/WindowsScreen"
import {BrowserRouter as  Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* To Do's
      1. Need to work on autocomplete component to have it close when onSubmit is recieved
      */}
      <Router>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/desktop" component={WindowsScreen} />
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
