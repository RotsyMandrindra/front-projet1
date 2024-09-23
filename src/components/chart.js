// src/components/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      }}
    />
  );
};

export default Chart;
