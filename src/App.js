import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Home from './component/Home';
import { useState } from 'react';

function App() {
  const [dark,setDark]=useState(false)
  return (
    <div className="App">
      <Menu setdark={setDark} dark={dark}/>
      <Home dark={dark}/>
    </div>
  );
}

export default App;
