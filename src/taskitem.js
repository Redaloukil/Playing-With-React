import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);
        
    
        this.state = {
            isEditing:false,
        }
        
        this.isEditing = this.isEditing.bind(this);
        this.doneOrNot = this.doneOrNot.bind(this);
        this.buttonName = this.buttonName.bind(this);
    }
    doneOrNot(){
        var status = this.props.status;
        if(status){
            return "done";
        }
        return "not done";
    }
    isEditing(){
        if (this.state.isEditing===false){
            this.setState({isEditing : true})
        }else{
            this.setState({isEditing : false})
        }
        console.log(this.state.isEditing);
    }
    buttonName(){
        if(this.state.isEditing){
            return "submit";
        }
        return "Edit"
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
                <button onClick={this.isEditing}>{this.buttonName()}</button>
                <button>Remove</button>
            </td>
        </tr>
      );
    }
  }
  
  export default App;
  