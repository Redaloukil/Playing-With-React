import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);
        this.doneOrNot = this.doneOrNot.bind(this);
    }
    doneOrNot(){
        var status = this.props.status;
        if(status){
            return "done";
        }
        return "not done";
    }
    render() {
      return (
        <tr>
            <td>
                <p>{this.props.task}</p>
            </td>
            <td>
                <p>{this.doneOrNot()}</p>
            </td>
            <td>
                <button>update</button>
                <button>remove</button>
            </td>
        </tr>
      );
    }
  }
  
  export default App;
  