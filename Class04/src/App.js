import React , {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(1)
  return (
    <div >
      <h1>Value of the counter variable is: {count}</h1>
      <br />
      <button onClick={()=>setCount(2)}>Update Counter</button>
    </div>
  );
}

export default App;
