import React, { Component } from 'react';

class Dolistheader extends Component {
    render(){
        return(
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>manage</th>        
                </tr>
            </thead>
        )
    }
}
export default Dolistheader;