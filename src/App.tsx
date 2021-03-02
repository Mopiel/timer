import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./Timer/Timer";

const lastSeen = Date.now();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer lastSeen={lastSeen} />
      </header>
    </div>
  );
}

export default App;
