import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Download from './components/Download';
import MozillaIcon from './components/MozillaIcon';
import Description from './components/Description';
import Dino from './components/Dino';



function App() {
  return (
    <div>
      <div><MozillaIcon/></div>
      <div><Nav/></div>
      <div><Download/></div>
      <div><Description/></div>
      <div><Dino/></div>
    </div>

  );
}

export default App;
