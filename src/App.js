import './App.css';
import Today from './today.js'


function App() {
  return (
      <div className = "App">
      {/*<Today />*/}
          <Today tommorow= "Monday"></Today>
          <Today tommorow= "tuesday"></Today>
          <Today tommorow= "Wednesday"></Today>

      </div>
  );
}

export default App;
