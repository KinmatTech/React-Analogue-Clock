import React from 'react';
import './App.css';
import AnalogClock from 'react-analog-clock';

function App() {
  const clockOptions = {
    baseColor: '#000000',
    borderColor: '#000000',
    borderWidth: 0,
    centerColor: '#000000',
    handColors: {
        hour: '#ffffff',
        minute: '#ffffff',
        second: 'red',
    },
    notchColor: '#ffffff',
    numbersColor: '#fffff',
    showNumbers: true,
    size: 300
}
  return (
    <div className="app">
      <h1>Kinmat Tech. React Analogue Clock</h1>
      <AnalogClock {...clockOptions} />
      <h2>What an awesome clock from Kinmat Tech.</h2>
    </div>
  );
}

export default App;