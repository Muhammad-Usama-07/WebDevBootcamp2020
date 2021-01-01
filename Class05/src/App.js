import React, {useState} from 'react' 
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext.js' 

function App() {
    let [count, SetCount] = useState(30)
  return (
    <CounterContext.Provider value = {count} >
        <div>
          <Parent name='Usama'/>
        </div>
    </CounterContext.Provider>
  );
}

export default App;
