import React, { Component } from 'react';

class Test extends Component {
    state={
        age : 22,
        name:'rahma',
    }
    older=()=>{
        this.setState({
            age:this.state.age + 1
        })
    }
    render() {
        return (
            <div>
               <p>my age is :{this.state.age}</p> 
               <p>my name is:{this.state.name}</p>
               <button onClick={this.older}>make me older</button>
            </div>
        );
    }
}

export default Test;
