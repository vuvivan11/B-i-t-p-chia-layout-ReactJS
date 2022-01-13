import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
             number: 0
        }
        console.log("constructor - Chỉ chạy 1 lần");
    }
    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount - Chỉ chạy 1 lần");
    }

    componentDidMount(){
        console.log("componentDidMount - Chỉ chạy 1 lần");
    }

    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        return (
            <div style={{textAlign: "center"}}>
                <h1>LifeCycle</h1>
                <h2>Number : {this.state.number}</h2>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Click</button>
            </div>
        )
    }
}
