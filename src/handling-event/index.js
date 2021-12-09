import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Quan",
            isLogin: false,
        }
    }


    handleLogin = () => {
        this.setState({
            isLogin: true
        })
    }

    handleLogout = () => {
        this.setState({
            isLogin: false
        })
    }

    renderHTML() {
        return (
            this.state.isLogin ? (
                <div>
                    <h3>Hello {this.state.name}</h3>
                    <button className="btn btn-danger" onClick={this.handleLogout}>Log Out</button>
                </div>
            ) : (
                <div>
                    <h3>Vui long Dang Nhap</h3>
                    <button className="btn btn-success" onClick={this.handleLogin}>Log In</button>
                </div>
            )
        )
    }


    render() {
        return (
            <div>{this.renderHTML()}</div>
        )
    }
}
