import React, {useContext} from 'react'
import counterContext from './CounterContext.js'

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return(
        <div> 
            <h2>this is first child</h2>
            <h2>the value is: {counterValue}</h2>

        </div>
    )
}

export default Child;