import React , {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div >
      <h1>Value of the counter variable is: {count}</h1>
    </div>
  );
}

export default App;
