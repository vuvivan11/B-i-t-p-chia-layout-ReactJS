import React, { Component } from 'react'
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../data/danhSachGhe.json"
import "./index.css"
import HangGhe from './HangGhe';

export default class BookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
    render() {
        return (
            <div style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: "100%" }}>
                <div style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)" }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h1 className='text-warning display-4'>Đặt vé xem phim</h1>
                                <div className='text-light' style={{ fontSize: "25px" }}>Màn Hình</div>
                                <div className='mt-3' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div className='screen' style={{marginLeft: "auto", marginRight: "auto"}}>

                                    </div>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className='col-4'>
                                <h1 className='text-light display-4 mt-5'>Danh Sách ghế</h1>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
