'use client';
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  platform?: string;
}

export default function StatCard({ title, value, change, icon, platform }: StatCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className={`p-2 rounded-full ${platform ? 
          platform === 'twitter' ? 'bg-blue-100 text-blue-600' : 
          platform === 'instagram' ? 'bg-pink-100 text-pink-600' : 
          platform === 'facebook' ? 'bg-indigo-100 text-indigo-600' : 
          'bg-gray-100 text-gray-600'
          : 'bg-primary-100 text-primary-600'}`}>
          {icon}
        </div>
      </div>
      <div className="mt-auto">
        <div className={`inline-flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span className="mr-1">
            {isPositive ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
              </svg>
            )}
          </span>
          <span>{Math.abs(change)}%</span>
          <span className="ml-1 text-gray-500 dark:text-gray-400">vs last month</span>
        </div>
      </div>
    </div>
  );
}
