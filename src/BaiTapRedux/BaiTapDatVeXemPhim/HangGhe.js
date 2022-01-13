import React, { Component } from 'react'
import { connect } from "react-redux"
import { actDatGhe } from '../../redux-new/actions/actBooking';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) =>{
            // trang thai ghe da dat
            let cssGheDaDat = "";
            let disabled = false;
            if(ghe.daDat){
                cssGheDaDat = "gheDuocChon";
                disabled = true
            }
            // trang thai ghe dang dat
            let cssGheDangDat = "";
            let _index = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if(_index !== -1){
                cssGheDangDat = "gheDangChon"
            }
            return <button disabled = {disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index} onClick={() => {this.props.datGhe(ghe)}}>{ghe.soGhe}</button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((number, index) => {
            return <span style={{margin: "2.2%"}} className='rowNumber' key={index}>
                {number.soGhe}
            </span>
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return <div style={{marginLeft: 60}}>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
               {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light mt-3' style={{fontSize: "25px"}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(actDatGhe(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HangGhe)

