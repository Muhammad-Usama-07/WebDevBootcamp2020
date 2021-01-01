import React, {useContext} from 'react'
import counterContext from './CounterContext.js'

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return(
        <div> 
            <h2>this is first child</h2>
            <h2>the value is: {counterValue[0]}</h2>
            <button onClick = {()=> {counterValue[1](++counterValue[0])}}>Increament</button>
        </div>
    )
}

export default Child;