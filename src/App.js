import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dolist from './dolist.js';



class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="App">
            <Dolist/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
