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
    <div className="min-h-screen bg-gray-100 md:p-8 p-4">
      <div className="md:max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center  " >
            <img src="/devflow_logo3.png" alt="Devflow logo" className='h-16 w-16 mr-4' style={{borderRadius: "50%"}} />
            <h1 className="md:text-3xl text-2xl text-black font-bold">Devflow - Analytics Dashboard</h1>
          </div>
          <div className="w-full md:w-64 text-black mt-4 md:mt-0">
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

        <div className="md:grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ChatBox />
          </div>

          <div className="grid grid-cols-1 gap-6 md:mt-0 mt-5" style={{height: "fit-content"}}>
            <BestTimeSection />
            <TrendingSection />
            <HashtagSection />
          </div>
        </div>

      </div>
    </div>
  );
}
