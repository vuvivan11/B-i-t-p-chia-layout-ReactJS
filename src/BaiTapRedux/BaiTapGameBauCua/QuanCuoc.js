import React from 'react';
import { useDispatch } from 'react-redux';
import { animated, useSpring } from "react-spring";

export default function QuanCuoc(props) {
    const { quancuoc } = props;
    const dispatch = useDispatch();

    const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
        return {
            to: {
                scale: 1.25
            },
            from: {
                scale: 0.75
            }
        }
    })

    const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
        return {
            to: {
                scale: 1.25
            },
            from: {
                scale: 0.75
            }
        }
    })
    return (
        <div>
            <div style={{ width: "200px", height: "280px" }}>
                <img src={quancuoc.hinhAnh} style={{ width: "100%" }} alt='' />
                <div className='bg-success text-center' style={{ borderRadius: 5 }}>
                    <animated.button disabled={quancuoc.diemCuoc === 0} style={{ transform: propsUseSpringDecrease.scale.to(scale => `scale(${scale})`) }} className='btn btn-danger my-2 ' onClick={() => {
                        setDecrease({
                            reset: true
                        })
                        
                        dispatch({
                            type: "DAT_CUOC_BAU_CUA",
                            payload: quancuoc,
                            tangGiam: false,
                        })
                    }}>-</animated.button>
                    <span className='text-warning mx-3' style={{ fontSize: 25 }}>{quancuoc.diemCuoc}$</span>
                    <animated.button style={{ transform: propsUseSpringIncrease.scale.to(scale => `scale(${scale})`) }} className='btn btn-danger my-2' onClick={() => {
                        setIncrease({
                            reset: true
                        })
                        dispatch({
                            type: "DAT_CUOC_BAU_CUA",
                            payload: quancuoc,
                            tangGiam: true,
                        })
                    }}>+</animated.button>
                </div>
            </div>
        </div>
    )
}
