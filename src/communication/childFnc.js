import React from 'react'

export default function ChildFnc(props) {
    const {username, age} = props;
    return (
        <div>
            <h3>ChildFnc</h3>
            <p>Username: {username} - Age: {age}</p>
        </div>
    )
}
