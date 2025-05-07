'use client';

import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import ErrorBoundary from '@/components/ErrorBoundary';
import StatCard from '@/components/StatCard';
import EngagementChart from '@/components/EngagementChart';
import { format, subDays } from 'date-fns';

// Generate deterministic chart data for the last 30 days
const generateChartData = () => {
  const data = [];
  for (let i = 30; i >= 0; i--) {
    const date = subDays(new Date('2025-01-01'), i); // Use fixed date to ensure consistency
    data.push({
      date: format(date, 'MMM dd'),
      instagram: 2000 + (i * 13) % 1000,
      twitter: 1500 + (i * 17) % 800,
      facebook: 1000 + (i * 19) % 600,
      linkedin: 500 + (i * 23) % 400,
    });
  }
  return data;
};

const platformData = generateChartData();

// Platform metrics
const platforms = [
  {
    name: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#E1306C',
    stats: [
      { label: 'Followers', value: '68,521', change: 15.3 },
      { label: 'Engagement Rate', value: '4.8%', change: 2.1 },
      { label: 'Reach', value: '245K', change: 8.7 },
      { label: 'Posts', value: '142', change: 5.2 },
    ],
    connected: true,
  },
  {
    name: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: '#1DA1F2',
    stats: [
      { label: 'Followers', value: '32,145', change: 8.7 },
      { label: 'Engagement Rate', value: '3.2%', change: 1.5 },
      { label: 'Impressions', value: '187K', change: 6.3 },
      { label: 'Tweets', value: '215', change: 12.4 },
    ],
    connected: true,
  },
  {
    name: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    color: '#4267B2',
    stats: [
      { label: 'Followers', value: '15,782', change: 5.2 },
      { label: 'Engagement Rate', value: '2.7%', change: 0.8 },
      { label: 'Reach', value: '98K', change: 3.5 },
      { label: 'Posts', value: '87', change: -2.1 },
    ],
    connected: true,
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#0077B5',
    stats: [
      { label: 'Followers', value: '8,445', change: 12.1 },
      { label: 'Engagement Rate', value: '3.9%', change: 2.8 },
      { label: 'Impressions', value: '42K', change: 9.4 },
      { label: 'Posts', value: '56', change: 7.6 },
    ],
    connected: true,
  },
  {
    name: 'TikTok',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: '#000000',
    stats: [],
    connected: false,
  },
  {
    name: 'YouTube',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#FF0000',
    stats: [],
    connected: false,
  },
];

export default function Platforms() {
  return (
    <ErrorBoundary>
      <DashboardLayout>
        <DashboardHeader 
          title="Social Media Platforms" 
          subtitle="Manage and monitor all your connected social media accounts"
        />
        
        <div className="mb-6">
          <EngagementChart 
            data={platformData} 
            title="Platform Performance Comparison" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${platform.color}20` }}>
                      <div className="text-[color:var(--platform-color)]" style={{ '--platform-color': platform.color } as any}>
                        {platform.icon}
                      </div>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-100">{platform.name}</h3>
                  </div>
                  {platform.connected ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Connected
                    </span>
                  ) : (
                    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Connect
                    </button>
                  )}
                </div>
                
                {platform.connected ? (
                  <div className="grid grid-cols-2 gap-4">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{stat.value}</div>
                          <div className={`ml-2 text-xs font-medium ${
                            stat.change >= 0 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-red-600 dark:text-red-400'
                          }`}>
                            {stat.change >= 0 ? '+' : ''}{stat.change}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Connect your {platform.name} account to view analytics and manage content.
                    </p>
                  </div>
                )}
                
                {platform.connected && (
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      View Profile
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Create Post
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}
