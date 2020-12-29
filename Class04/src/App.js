import React , {useState} from 'react';
import './App.css';
import Message from './message.js'

function App() {
  let [count, setCount] = useState(1)
  return (
    <div className = "box">
      <Message counter = {count}/>
      <br />
      <button onClick={()=>setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
