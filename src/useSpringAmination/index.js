import React from 'react';
import { useSpring, animated } from "react-spring"

export default function UseSpringAnimation() {
    const props = useSpring({
        to: { color: "red", num: 100 },
        from: { color: "green", num: 0 },
        config: {
            duration: 3000
        },
    })


    return (
    <animated.div style={{ color: props.color, fontSize: props.num }}>{props.num}</animated.div>
    )
}
