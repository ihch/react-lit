import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LitStartComponent } from './packages/LitStart.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="main">
        <p style={{ margin: 0 }}>Lit Element</p>
        <div className="lit-start">
          <LitStartComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
