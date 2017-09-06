import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dolist from './dolist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Dolist/>
      </div>
    );
  }
}

export default App;
