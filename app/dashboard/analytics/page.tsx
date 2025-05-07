'use client';

import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/StatCard';
import EngagementChart from '@/components/EngagementChart';
import ErrorBoundary from '@/components/ErrorBoundary';
import { format, subDays } from 'date-fns';

// Generate deterministic chart data for the last 30 days
const generateChartData = () => {
  const data = [];
  for (let i = 30; i >= 0; i--) {
    const date = subDays(new Date('2025-01-01'), i); // Use fixed date to ensure consistency
    data.push({
      date: format(date, 'MMM dd'),
      views: 5000 + (i * 21) % 2000,
      engagement: 2500 + (i * 15) % 1000,
      conversion: 500 + (i * 11) % 300,
    });
  }
  return data;
};

const analyticsData = generateChartData();

// Analytics metrics
const metrics = [
  {
    title: 'Total Views',
    value: '1.2M',
    change: 8.2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Engagement Rate',
    value: '4.8%',
    change: 1.2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    title: 'Conversion Rate',
    value: '2.3%',
    change: 0.5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Avg. Session Duration',
    value: '2m 45s',
    change: 3.7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Traffic sources data
const trafficSources = [
  { source: 'Direct', percentage: 35, color: '#3B82F6' },
  { source: 'Organic Search', percentage: 25, color: '#10B981' },
  { source: 'Social Media', percentage: 20, color: '#F59E0B' },
  { source: 'Referral', percentage: 15, color: '#6366F1' },
  { source: 'Email', percentage: 5, color: '#EC4899' },
];

export default function Analytics() {
  return (
    <ErrorBoundary>
      <DashboardLayout>
        <DashboardHeader 
          title="Analytics" 
          subtitle="Detailed insights into your social media performance"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <StatCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              icon={metric.icon}
            />
          ))}
        </div>
        
        <div className="mb-6">
          <EngagementChart 
            data={analyticsData} 
            title="Performance Metrics" 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{source.source}</span>
                    <span>{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full" 
                      style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Page
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Views
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Avg. Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { page: '/home', views: '12,543', time: '2:15' },
                    { page: '/products', views: '8,721', time: '3:42' },
                    { page: '/about', views: '5,392', time: '1:20' },
                    { page: '/contact', views: '3,217', time: '0:45' },
                    { page: '/blog', views: '2,845', time: '4:12' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {item.page}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {item.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {item.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}
