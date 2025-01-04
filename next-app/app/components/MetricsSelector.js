"use client";

import React from 'react';

export default function MetricsSelector({ selectedMetric, onMetricChange }) {
  const metrics = ['Likes', 'Comments', 'Shares', 'Reach'];
  
  return (
    <select 
      value={selectedMetric}
      onChange={(e) => onMetricChange(e.target.value.toLowerCase())}
      className="w-full p-2 border rounded-lg bg-white shadow-sm"
    >
      {metrics.map((metric) => (
        <option key={metric} value={metric.toLowerCase()}>
          {metric}
        </option>
      ))}
    </select>
  );
}