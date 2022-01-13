import React, { Component } from 'react';
import { connect } from "react-redux"
import { actHuyGhe } from '../../redux-new/actions/actBooking';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5 text-light' style={{ fontSize: 25 }} >
                    <button className='gheDuocChon'></button><span>Ghế đã đặt</span>
                    <br></br>
                    <button className='gheDangChon my-3'></button><span>Ghế đang đặt</span>
                    <br></br>
                    <button className='ghe' style={{ marginLeft: 0 }}></button><span>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table table-bordered">
                        <thead>
                            <tr className='text-light' style={{fontSize: "25px"}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr className='text-warning' key={index}>
                                    <td>
                                        {gheDangDat.soGhe}
                                    </td>
                                    <td>
                                        {gheDangDat.gia.toLocaleString()}
                                    </td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        this.props.huyGhe(gheDangDat.soGhe)
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td>Tổng Tiền</td>
                                <td style={{fontSize: "25px"}}>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
                                    return tongTien += gheDangDat.gia
                                }, 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
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
        huyGhe: (soGhe) => {
            dispatch(actHuyGhe(soGhe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ThongTinDatGhe)