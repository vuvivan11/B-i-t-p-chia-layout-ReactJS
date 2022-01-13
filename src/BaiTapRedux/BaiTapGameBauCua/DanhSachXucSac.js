import React from 'react'
import XucSac from './XucSac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucSac() {
    const dispatch = useDispatch();
    const mangXucSac = useSelector(state => state.GameBauCuaReducer.mangXucSac);
    return (
        <div className='mt-3'>
            <div className='bg-white' style={{ width: 300, height: 300, borderRadius: "50%", position: "relative" }}>
                <div style={{ position: "absolute" }}>
                    <div className='text-right row'>
                        <div style={{ marginLeft: 100 }}>
                            <XucSac xucSac={mangXucSac[0]} />
                        </div>
                        <div style={{ marginLeft: 20, marginTop: 85 }}>
                            <XucSac xucSac={mangXucSac[1]} />
                        </div>
                        <div style={{ marginLeft: 61, marginTop: -130 }}>
                            <XucSac xucSac={mangXucSac[2]} />
                        </div>

                    </div>
                </div>
                {/* <div className='row'>
                    <div className='col-12 text-center' style={{ marginLeft: 75 }}>
                        <XucSac xucSac={mangXucSac[0]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 text-right' style={{marginTop: -20}}>
                        <XucSac xucSac={mangXucSac[1]} />
                    </div>
                    <div className='col-4 text-right'>
                        <XucSac xucSac={mangXucSac[2]} />
                    </div>
                </div> */}
            </div>
            <div>
                <button className='btn btn-danger' style={{ marginLeft: "25%", marginTop: 10 }} onClick={() => {
                    dispatch({
                        type: "PLAY_GAME"
                    })
                }}>Xóc</button>
            </div>
        </div>
    )
}
