"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from './ChartConfig';

export default function LineChart({ data, selectedMetric }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      label: selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1),
      data: Object.values(data).map(item => item[selectedMetric]),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div style={{ height: '300px' }}>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}