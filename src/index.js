import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <h1>Analog Clock React App </h1>
      <h3>Author: Kinmat Tech.</h3>
      <Clock />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);