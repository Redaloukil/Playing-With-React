import React, { Component } from 'react';
import Dolistheader from './header';
import Taskitem from './taskitem';
import Addtask from './add-task';

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
class Dolist extends Component {
    constructor(props){
        super(props);
        this.state={
            task:task,
        }
        this.renderTask = this.renderTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.submitTask = this.submitTask.bind(this)
    }
    renderTask(){
        var arr = [];
        var taskArr = this.state.task;
        taskArr.map((item , i)=>{
            arr.push(<Taskitem key={i} {...item} />);
        })
       return arr;
    }
    addTask(newTask){
        console.log(newTask);
    }
    submitTask(){
        addTask(this.newtask.value)
    }
    render(){
        return(
            <div>
                //simple test added to see if input form work properly here 
                <div>
                    <input  type="text" 
                                id="task"   
                                placeholder="what i want to do ?" 
                                ref={(input)=>{this.newtask = input}}
                                />
                    <button onClick={this.submitTask}>Submit This Task</button>
                </div>
                //end test
                <table>
                    <Dolistheader/>
                    <tbody>
                        {this.renderTask()}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}
export default Dolist;