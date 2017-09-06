import React, { Component } from 'react';
import Dolistheader from './header';
import Taskitem from './taskitem';

class Dolist extends Component {
    constructor(props){
        super(props);
        this.renderTask = this.renderTask.bind(this)
    }
    renderTask(){
        var arr = [];
        var taskArr = this.props.tasks;
        taskArr.map((item , i)=>{
            arr.push();
        })
       return arr;
    }
    render(){
        return(
            <div>
                <table>
                    <Dolistheader/>
                    {this.renderTask()}
                </table>
            </div>
        )
    }
}
export default Dolist;