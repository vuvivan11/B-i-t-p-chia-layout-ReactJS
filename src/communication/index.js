import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import Children from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 4,
        }
    }

    changeInfo = () => {
        this.setState({
            username: "Quan",
            age: 18
        })
    }


    // Lifting State Up
    reset = (username, age) => {
        this.setState({
            username,
            age
        })
    }


    render() {
        const {username, age} = this.state;
        return (
            <div>
                <h3>Communication</h3>
                <p>Username {username} - age {age}</p>
                <button className="btn btn-success" onClick={this.changeInfo}>Change Info</button>
                <hr />
                <Child username={username} age={age} resetInfo={this.reset}/>
                <hr />
                <ChildFnc username={username} age={age}/>
                <hr />
                <Children>
                    <p>Username: {username} - Age: {age}</p>
                    <h3>Quan</h3>
                </Children>
            </div>
        )
    }
}
