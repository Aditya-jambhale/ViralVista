"use client";

import React from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import { Card, Title } from '@tremor/react';


export default function AnalyticsCharts({ data, selectedMetric }) {
  return (
    <>
      <Card className="bg-white text-black p-4 rounded-lg shadow-sm border border-gray-300">
        <Title className="text-lg font-semibold mb-4">Trend Analysis</Title>
        <LineChart data={data} selectedMetric={selectedMetric} />
      </Card>
      <Card className="bg-white text-black p-4 rounded-lg shadow-sm border border-gray-300">
        <Title className="text-lg font-semibold mb-4">Distribution</Title>
        <PieChart data={data} selectedMetric={selectedMetric} />
      </Card>
      <Card className="bg-white text-black p-4 rounded-lg shadow-sm border border-gray-300">
        <Title className="text-lg font-semibold mb-4">Comparison</Title>
        <BarChart data={data} selectedMetric={selectedMetric} />
      </Card>
    </>
  );
}