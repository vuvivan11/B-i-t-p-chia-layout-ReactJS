import React, { Component } from 'react';
import { connect } from "react-redux"


class Player extends Component {
    render() {  
        return (
            <div className='text-center playGame'>
                <div className='theThink'>
                    <img style={{ width: 180, height: 120 }} src={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./img/gameOanTuTi/player.png' alt='' />
                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {
                        // xét giá trị đặt cược thêm viền cho item được chọn
                        let border = {};
                        if(item.datCuoc){
                            border = {border: "3px solid orange"}
                        }
                        return <div className='col-4' key={index}>
                            <button onClick={() => {this.props.datCuoc(item.ma)}} style={border} className='btnItem'>
                                <img style={{ width: 35, height: 35 }} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.counterReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: "CHON_KEO_BUA_BAO",
                payload: maCuoc
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player)

