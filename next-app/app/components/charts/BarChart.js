"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from './ChartConfig';

export default function BarChart({ data, selectedMetric }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      label: selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1),
      data: Object.values(data).map(item => item[selectedMetric]),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
    }]
  };

  return (
    <div style={{ height: '300px' }}>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}