import React, { Component } from 'react';

class Addtask extends Component {
    constructor(props){
        super(props);
        this.submitTask = this.submitTask.bind(this);
    }
    submitTask(){
        this.props.taskadding(this.newtask.value)
        
    }
    render(){
        return(
            <div>
                <input  type="text" 
                            id="task"   
                            placeholder="what i want to do ?" 
                            ref={(input)=>{this.newtask = input}}
                             />
                <button onClick={this.submitTask}>Submit This Task</button>
                
            </div>
        )
    }
}
export default Addtask;