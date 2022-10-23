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
    size: 280
}
  return (
    <div className="container">
            <div className="app">
      <h2>React Analogue Clock</h2>
                    <AnalogClock {...clockOptions} />
      <h3>Awesome clock from Kinmat Tech.</h3>
    </div>
    </div>
    
  );
}

export default App;