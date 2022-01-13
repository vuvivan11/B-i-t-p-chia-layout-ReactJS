import React from 'react'
import DanhSachQuanCuoc from './DanhSachQuanCuoc'
import DanhSachXucSac from './DanhSachXucSac'
import DiemCuoc from './DiemCuoc'
import "./index.css"

export default function GameBauCua() {
    return (
        <div id='BaiTapGameBauCua' className='container-fluid'>
            <DiemCuoc />
            <div className='row'>
                <div className='col-8'>
                    <DanhSachQuanCuoc />
                </div>
                <div className='col-4'>
                    <DanhSachXucSac />
                </div>
            </div>
        </div>
    )
}
