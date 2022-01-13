import React from 'react';
import { useSpring, animated, to } from 'react-spring';

export default function Ex2UseSpring() {

    let propsUseSpring = useSpring({
        loop: true,
        color: [128, 0, 128],
        text: "Hello World",
        num: 100,
        from: {
            color: [238, 221, 130],
            num: 0
        },
        config: {
            duration: 3000
        }
    })

    const styles = useSpring({
        loop: true,
        to: async (next, cancel) => {
            await next({ opacity: 1, color: '#ffaaee' })
            await next({ opacity: 0.5, color: 'rgb(14,26,19)' })
        },
        from: { opacity: 0, color: 'red' },
    })

    let arrOpacity = [
        { opacity: 0.1, color: "red", content: "Ba", num: 100 },
        { opacity: 0.3, color: "blue", content: "Ma", num: 200 },
        { opacity: 0.5, color: "green", content: "Anh", num: 300 },
        { opacity: 0.7, color: "orange", content: "Chi", num: 400 },
        { opacity: 1, color: "pupple", content: "Em", num: 500 },
    ] 

    


    return (
        <div>
            <animated.div style={{
                color: propsUseSpring.color.to((r, g, b) => `rgb(${r}, ${g}, ${b})`),
                fontSize: propsUseSpring.num,
            }}>
                {propsUseSpring.text}
            </animated.div>

            <animated.div style={styles}>I will fade in and out</animated.div>

            <animated.div></animated.div>
        </div>
    )
}
