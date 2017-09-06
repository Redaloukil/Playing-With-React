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
            arr.push(<Taskitem key={i} {...item} />);
        })
       return arr;
    }
    render(){
        return(
            <div>
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