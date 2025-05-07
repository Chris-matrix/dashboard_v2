'use client';

import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/components/DashboardHeader';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Settings() {
  return (
    <ErrorBoundary>
      <DashboardLayout>
        <DashboardHeader 
          title="Settings" 
          subtitle="Manage your account and preferences"
        />
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-700"
                defaultValue="Jane Smith"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-700"
                defaultValue="jane.smith@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-700"
                defaultValue="********"
              />
            </div>
            
            <div>
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Save Changes
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
          
          <div className="space-y-4">
            {[
              { id: 'email', label: 'Email Notifications' },
              { id: 'push', label: 'Push Notifications' },
              { id: 'sms', label: 'SMS Notifications' },
              { id: 'weekly', label: 'Weekly Reports' },
              { id: 'monthly', label: 'Monthly Analytics' },
            ].map((item) => (
              <div key={item.id} className="flex items-center">
                <input
                  id={item.id}
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  defaultChecked={['email', 'push', 'weekly'].includes(item.id)}
                />
                <label htmlFor={item.id} className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </label>
              </div>
            ))}
            
            <div className="pt-4">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ErrorBoundary>
  );
}
