import React, { Component } from 'react'

export default class ListsKeys extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrUser: [
                {
                    fname: "Quan",
                    age: 24,
                    class: "BC20",
                },
                {
                    fname: "Long",
                    age: 24,
                    class: "BC20",
                },
                {
                    fname: "Nguyen",
                    age: 24,
                    class: "BC20",
                },
            ]
        }
    }
    renderListUser(){
        return this.state.arrUser.map((user, index) => {
            return (
                <h3 key={index}>ten: {user.fname} - age: {user.age} - class: {user.class}</h3>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderListUser()}
            </div>
        )
    }
}
