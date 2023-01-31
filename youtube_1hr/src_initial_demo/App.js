import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect( () => {
    alert(`You've chanced the count to ${counter}`)
  }, [counter])  // <- this will alert you every time the counter changes (or call other code)
  
  return (
    <div className="App">
      {/* the prevCount is just a parameter, can call whatever. PREV= previous*/}
      <p><button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>   <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button></p>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
