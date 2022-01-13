import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function DiemCuoc() {
    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem);
    const dispatch = useDispatch();
    return (
        <div >
            <h3 className='text-center display-4' style={{color: "#0fe80f"}}>Game Bầu Cua</h3>
            <div className='text-center mt-3'>
                <span style={{fontSize: 20, borderRadius: "10px"}} className='p-3 text-white bg-danger'>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span>
                </span>
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => {
                    dispatch({
                        type: "CHOI_LAI"
                    })
                }} style={{fontSize: 15, border: "none", borderRadius: 5}} className='p-2 text-white bg-success'>Chơi lại
                </button>
            </div>
        </div>
    )
}
