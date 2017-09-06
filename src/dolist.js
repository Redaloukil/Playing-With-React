import React, { Component } from 'react';
import Dolistheader from './header'

const task = [
    {
        task:"making some skills on react"
    },
    {},
    {}
]




class Dolist extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                
                <table>
                    <Dolistheader/>
                </table>
            </div>
        )
    }
}
export default Dolist;