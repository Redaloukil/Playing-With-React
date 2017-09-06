import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dolist from './dolist.js';

const task = [
  {
      task:"making some skills on react",
      status:true
  },
  {
      task:"having my dinner",
      status:false
  },
  {
      task:"making some skills on react-native",
      status:false
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        task:task,
      }
  }
  render() {
    return (
      <div className="container centered">
        <div className="App">
          <Dolist tasks={this.state.task}/>
        </div>
      </div>
    );
  }
}

export default App;
