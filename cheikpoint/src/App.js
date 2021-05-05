import reacte from 'react';
import logo from './logo.svg';
import './App.css';
import js from './js.png'
function App() {
  return (
    <div className="App">
    <h1 className='titleRed'>ELghorez lamjed</h1>
    <img src={js} alt='javascript logo'/><br></br>
    <img src="/html.png" alt="html"/><br></br>
    <video width="320" height="240" controls>
      <source src="/Gomycode.mp4" type="video/mp4"></source>
    </video>
    </div>
  );
}

export default App;
