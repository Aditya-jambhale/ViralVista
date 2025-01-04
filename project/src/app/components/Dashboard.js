"use client";

import { useState } from 'react';
import formattedData from '../data/format_analytics';
import { aggregateByPostType } from '../utils/analytics';
import MetricsSelector from './MetricsSelector';
import AnalyticsCharts from './AnalyticsCharts';
import ChatBox from './ChatBox';
import { BestTimeSection, TrendingSection, HashtagSection } from './trends';

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('likes');
  const aggregatedData = aggregateByPostType(formattedData);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <div className="w-full md:w-64 mt-4 md:mt-0">
            <MetricsSelector 
              selectedMetric={selectedMetric} 
              onMetricChange={setSelectedMetric} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <AnalyticsCharts 
            data={aggregatedData} 
            selectedMetric={selectedMetric}
          />
        </div>

        <ChatBox />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <BestTimeSection />
          <TrendingSection />
          <HashtagSection />
        </div>
      </div>
    </div>
  );
}
