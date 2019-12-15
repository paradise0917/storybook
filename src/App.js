import React from 'react';
import './App.css';

import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
        </p>
        <Button text={"Button Text By Props"} bgcolor={"#e57373"}></Button>
      </header>
    </div>
  );
}

export default App;
