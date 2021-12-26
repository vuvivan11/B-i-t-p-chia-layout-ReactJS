import React, { Component } from 'react';
import Player from "./Player"
import Computer from "./Computer"
import KetQuaTroChoi from "./KetQuaTroChoi"
import "./index.css"
import { connect } from "react-redux"

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className='game'>
                <div className='row text-center mt-2'>
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={() => { this.props.playGame() }} className='btn btn-success p-2 display-4 mt-5'>Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0
            // khai báo hàm lập đi lập lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: "RAN_DOM"
                })
                count ++;
                if (count >= 10) {
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: "END_GAME"
                    })
                }
            }, 100)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)