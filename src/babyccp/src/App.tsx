import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CCPStateMachineFactory} from "./statemachine/DefaultCCPStateMachine";

const App: React.FC = () => {

  const sm = CCPStateMachineFactory()

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello WOrld.</p>
      </header>
    </div>
  );
}

export default App;
