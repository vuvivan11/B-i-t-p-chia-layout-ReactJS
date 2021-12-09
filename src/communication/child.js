import React, { Component } from 'react'

export default class Child extends Component {
    
    handleResetInfo = () => {
        const username = "Cybersoft";
        const age = 4;
        this.props.resetInfo(username, age);
    }


    render() {
        const {username, age} = this.props;
        return (
            <div>
                <h3>Child Component</h3>
                <p>Username: {username} - Age: {age}</p>
                <button className="btn btn-danger" onClick={this.handleResetInfo}>ResetInfo</button>
            </div>
        )
    }
}
