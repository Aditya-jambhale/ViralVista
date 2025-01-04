"use client";

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { chartOptions } from './ChartConfig';

export default function PieChart({ data, selectedMetric }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      data: Object.values(data).map(item => item[selectedMetric]),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    }]
  };

  return (
    <div style={{ height: '300px' }}>
      <Pie options={chartOptions} data={chartData} />
    </div>
  );
}