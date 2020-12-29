import React , {useState} from 'react';
import './App.css';
import Message from './message.js'

function App() {
  let [count, setCount] = useState(1)
  let [isMorning, setMorning] = useState(true)
  return (
    <div className = "box">
      <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      <br />
      <button onClick={()=>setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
