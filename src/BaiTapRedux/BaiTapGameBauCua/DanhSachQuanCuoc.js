import React from 'react'
import QuanCuoc from "./QuanCuoc";
import { useSelector } from "react-redux"

export default function DanhSachQuanCuoc(props) {
    const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);
    const renderQuanCuoc = () => {
        return danhSachCuoc.map((item, index) => {
            return <div className='col-4' key={index}>
                <QuanCuoc quancuoc={item} />
            </div>
        })
    }
    return (
        <div className='row mt-3'>
            {renderQuanCuoc()}
        </div>
    )
}
