import React from 'react'

function Today(props){
    return(
        <div>
            <h1>Today is Sunday</h1>
            <h1>the time is 11:41am</h1>
            <h1>and tommorow is {props.tommorow}</h1>
        </div>
    )
}

export default Today;