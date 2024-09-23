// src/App.js
import React from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  const labels = Utils.months({count: 7});
  const data = {
    labels: labels,
    datasets: [{
      label: 'Patrimoine',
      data: [700_000, 600_000, 500_000, 400_000, 300_000, 200_000, 100_000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="App">
      <Chart data={data}/>
    </div>
  );
}

export default App;
