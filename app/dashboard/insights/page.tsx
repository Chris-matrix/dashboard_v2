'use client';

import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import ErrorBoundary from '@/components/ErrorBoundary';
import StatCard from '@/components/StatCard';

export default function Insights() {
  // Sample insights data
  const insightCards = [
    {
      title: 'Audience Growth',
      insight: 'Your audience grew 15% faster this month compared to last month.',
      recommendation: 'Continue posting content about product tutorials which is driving the most growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Optimal Posting Time',
      insight: 'Posts published between 7-9 PM on Tuesdays and Thursdays get 34% more engagement.',
      recommendation: 'Schedule your most important content during these peak engagement windows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Content Performance',
      insight: 'Video content is outperforming images by 2.7x in terms of engagement rate.',
      recommendation: 'Increase your video content production to capitalize on this trend.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Hashtag Analysis',
      insight: '#ProductTips and #HowTo hashtags are generating 45% more reach than other hashtags.',
      recommendation: 'Include these high-performing hashtags in your educational content.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
    },
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      title: 'Content Effectiveness',
      value: '87/100',
      change: 5.3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Audience Sentiment',
      value: 'Positive',
      change: 2.1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Competitor Ranking',
      value: '2nd',
      change: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Growth Potential',
      value: 'High',
      change: 0,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <ErrorBoundary>
      <DashboardLayout>
        <DashboardHeader 
          title="AI Insights" 
          subtitle="AI-powered recommendations to optimize your social media strategy"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {performanceMetrics.map((metric, index) => (
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
          <h3 className="text-lg font-semibold mb-4">Key Insights & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightCards.map((card, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {card.icon}
                  </div>
                  <h4 className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-100">{card.title}</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <span className="font-semibold">Insight:</span> {card.insight}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <span className="font-semibold">Recommendation:</span> {card.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Content Topic Suggestions</h3>
          <div className="space-y-4">
            {[
              {
                topic: 'Product Tutorial Series',
                description: 'Step-by-step guides on how to use your product features',
                confidence: 92,
              },
              {
                topic: 'Industry Trend Analysis',
                description: 'Your take on the latest developments in your industry',
                confidence: 87,
              },
              {
                topic: 'Customer Success Stories',
                description: 'Showcase how your customers are achieving results',
                confidence: 85,
              },
              {
                topic: 'Behind-the-Scenes Content',
                description: 'Show your company culture and team members',
                confidence: 79,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-gray-100">{item.topic}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {item.confidence}% match
                  </div>
                  <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Create
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}
