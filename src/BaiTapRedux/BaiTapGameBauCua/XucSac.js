import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function XucSac(props) {
    const { xucSac } = props;

    const [ propsCube, set ] = useSpring(() => {
        return {
            xyz: [1800, 1800, 1800],
            from: {
                xyz: [0, 0, 0]
            }, 
            config: {
                duration: 1000
            },
            reset: true
        }
    })

    set({
        reset: true
    })
    
    return (
        <>
            <div className='scene'>
                <animated.div style={{transform: propsCube.xyz.to((x, y, z) => 
                    `translateZ(-100px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
                )}} className='cube'>
                    <img className='cube__face front' style={{ width: "100%" }} src={xucSac.hinhAnh} alt='' />
                    <img className='cube__face back' style={{ width: "100%" }} src="./img/BaiTapGameBauCua/bau.png" alt='' />
                    <img className='cube__face right' style={{ width: "100%" }} src="./img/BaiTapGameBauCua/cua.png" alt='' />
                    <img className='cube__face left' style={{ width: "100%" }} src="./img/BaiTapGameBauCua/tom.png" alt='' />
                    <img className='cube__face top' style={{ width: "100%" }} src="./img/BaiTapGameBauCua/ca.png" alt='' />
                    <img className='cube__face bottom' style={{ width: "100%" }} src="./img/BaiTapGameBauCua/ga.png" alt='' />
                </animated.div>
            </div>
        </>
    )
}
