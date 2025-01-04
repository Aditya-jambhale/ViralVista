"use client";

import React from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

export default function AnalyticsCharts({ data, selectedMetric }) {
  return (
    <>
      <div className="bg-white text-black p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
        <LineChart data={data} selectedMetric={selectedMetric} />
      </div>
      <div className="bg-white text-black p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Distribution</h3>
        <PieChart data={data} selectedMetric={selectedMetric} />
      </div>
      <div className="bg-white text-black p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Comparison</h3>
        <BarChart data={data} selectedMetric={selectedMetric} />
      </div>
    </>
  );
}