import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
        }
    }
    handleOnClick = (i) => {
        console.log(i);
    }

    render() {
        const status = "Next player is: " + (this.state.xIsNext ? "X" : "O")
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={this.handleOnClick} />
                </div>
                <div className="game-info">
                    <div>{status}</div> 
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}
