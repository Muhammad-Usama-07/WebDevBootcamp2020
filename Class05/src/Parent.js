import React from 'react'

import Child from './Child.js'
import Child2 from './Child2.js'

const Parent = (props) => {
    return(
        <Child name={props.name}/>
    )
}
        
export default Parent;