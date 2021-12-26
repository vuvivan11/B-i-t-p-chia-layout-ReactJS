import React, { Component } from 'react';
import { connect } from "react-redux"

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`
        return (
            <div className='text-center playGame'>
                <style>
                    {keyframe}
                </style>
                <div className='theThink' style={{position: "relative"}}>
                    <img style={{left: "5%", width: 180, height: 120, transform: 'rotate(180deg)',position: "absolute",animation: `randomItem${Date.now()} 0.5s`}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./img/gameOanTuTi/playerComputer.png' alt='./img/gameOanTuTi/playerComputer.png' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.counterReducer.computer
    }
}

export default connect(mapStateToProps, null)(Computer)
