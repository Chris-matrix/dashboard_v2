'use client';

import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useState } from 'react';

interface ContentItem {
  id: number;
  title: string;
  platform: string;
  date: string | null;
  status: string;
  engagement: number | null;
  image: string | null;
}

type ContentTabs = 'published' | 'scheduled' | 'drafts';

interface ContentItems {
  published: ContentItem[];
  scheduled: ContentItem[];
  drafts: ContentItem[];
}

export default function Content() {
  const [activeTab, setActiveTab] = useState<ContentTabs>('published');
  
  // Sample content data
  const contentItems: ContentItems = {
    published: [
      {
        id: 1,
        title: 'How to Increase Your Social Media Engagement',
        platform: 'Instagram',
        date: '2025-04-28',
        status: 'Published',
        engagement: 1245,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        title: 'Top 10 Marketing Trends for 2025',
        platform: 'Twitter',
        date: '2025-04-25',
        status: 'Published',
        engagement: 876,
        image: null,
      },
      {
        id: 3,
        title: 'The Ultimate Guide to Content Creation',
        platform: 'Facebook',
        date: '2025-04-20',
        status: 'Published',
        engagement: 543,
        image: 'https://via.placeholder.com/150',
      },
    ],
    scheduled: [
      {
        id: 4,
        title: 'Behind the Scenes: Our Product Development Process',
        platform: 'LinkedIn',
        date: '2025-05-10',
        status: 'Scheduled',
        engagement: null,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        title: 'Customer Success Story: XYZ Company',
        platform: 'Instagram',
        date: '2025-05-08',
        status: 'Scheduled',
        engagement: null,
        image: 'https://via.placeholder.com/150',
      },
    ],
    drafts: [
      {
        id: 6,
        title: 'Upcoming Product Launch Announcement',
        platform: 'All Platforms',
        date: null,
        status: 'Draft',
        engagement: null,
        image: null,
      },
      {
        id: 7,
        title: 'Industry Insights: The Future of Digital Marketing',
        platform: 'LinkedIn',
        date: null,
        status: 'Draft',
        engagement: null,
        image: null,
      },
    ],
  };

  return (
    <ErrorBoundary>
      <DashboardLayout>
        <DashboardHeader 
          title="Content Management" 
          subtitle="Create, schedule, and analyze your social media content"
        />
        
        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-1 border border-gray-200 dark:border-gray-700 rounded-md p-1 bg-gray-50 dark:bg-gray-800">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'published'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('published')}
            >
              Published
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'scheduled'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('scheduled')}
            >
              Scheduled
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'drafts'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('drafts')}
            >
              Drafts
            </button>
          </div>
          
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Create New Post
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Content
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Platform
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {activeTab === 'published' ? 'Published Date' : activeTab === 'scheduled' ? 'Scheduled Date' : 'Last Updated'}
                  </th>
                  {activeTab === 'published' && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Engagement
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {contentItems[activeTab].map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {item.image && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3">
                            <img className="h-10 w-10 rounded-md object-cover" src={item.image} alt="" />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{item.status}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.platform}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.date || 'Not set'}
                    </td>
                    {activeTab === 'published' && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {item.engagement?.toLocaleString() || 'N/A'}
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                        Edit
                      </button>
                      {activeTab === 'drafts' && (
                        <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                          Schedule
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}
