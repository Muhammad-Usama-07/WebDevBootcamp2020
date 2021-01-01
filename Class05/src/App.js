import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext.js' 

function App() {
  return (
    <CounterContext.Provider value = {25} >
        <div>
          <Parent name='Usama'/>
        </div>
    </CounterContext.Provider>
  );
}

export default App;
