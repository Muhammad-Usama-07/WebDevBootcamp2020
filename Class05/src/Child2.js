import React, {useReducer} from 'react'
import CounterReducer from './CounterReducer.js'

const Child2 = () =>{
    let [state, dispatch] = useReducer(CounterReducer, 1)
    console.log(state)
    return(
    <div>
        <h2>This is the second using Counter Reducer</h2>
        <h3>Value of Reducer state is: {state}</h3>
        <button onClick = {()=> {dispatch('INCREAMENT')}}>Increament</button>
    </div>
    )
}

export default Child2;