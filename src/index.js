import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <h2><font color="#009800">Clock App</font> </h2>
      <br/> <br/> <br/> <br/> <br/> <br/>
      <h3> 
        <font color="black">Kinmat Tech.</font></h3>
      <Clock />

      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);