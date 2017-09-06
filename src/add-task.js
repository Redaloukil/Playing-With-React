import React, { Component } from 'react';

class Addtask extends Component {
    render(){
        return(
            <div>
                <input type="text" id="task" placeholder="what i want to do ?"/>
                <button>Submit This Task</button>
            </div>
        )
    }
}
export default Addtask;