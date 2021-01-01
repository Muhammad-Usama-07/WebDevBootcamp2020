import React from 'react'

const Child = (props) => {
    return(
        <div> 
            <h2>this is first child</h2>
            <h2>this is {props.name}</h2>

        </div>
    )
}

export default Child;