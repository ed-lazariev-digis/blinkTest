import './App.css';
import { Blink } from './components/Blink'; 
import './style/Blink.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Blink tag</h1>
      </header>
      <div className="content">
        <span className="blink">Make this blink!</span>
        <Blink>Or make this blink!</Blink>
      </div>
    </div>
  );
}

export default App;
