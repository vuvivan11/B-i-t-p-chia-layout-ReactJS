import React from 'react'

export default function Children(props) {
    return (
        <div>
            <h3>Children</h3>
            <div>{props.children}</div>
        </div>
    )
}
