import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <h1>Analog Clock App </h1>
      
      <Clock />

      <h3>Author: Kinmat Tech. </h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);