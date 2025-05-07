'use client';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EngagementChartProps {
  data: Array<{
    date: string;
    instagram?: number;
    twitter?: number;
    facebook?: number;
    linkedin?: number;
  }>;
  title: string;
  dataKey?: string;
}

export default function EngagementChart({ data, title, dataKey = 'value' }: EngagementChartProps) {
  // Use state to handle client-side only rendering
  const [isClient, setIsClient] = useState(false);
  
  // Calculate max value for scaling - using a stable calculation method
  const maxValue = React.useMemo(() => {
    return Math.max(
      ...data.flatMap(item => [
        item.instagram || 0,
        item.twitter || 0,
        item.facebook || 0,
        item.linkedin || 0
      ])
    );
  }, [data]);
  
  // Set isClient to true when component mounts on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Format large numbers for tooltip
  const formatNumber = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <div className="card h-full border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      {/* Chart Legend */}
      <div className="flex flex-wrap gap-4 mb-4">
        {data[0]?.instagram !== undefined && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#E1306C] rounded-full mr-2"></div>
            <span>Instagram</span>
          </div>
        )}
        {data[0]?.twitter !== undefined && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#1DA1F2] rounded-full mr-2"></div>
            <span>Twitter</span>
          </div>
        )}
        {data[0]?.facebook !== undefined && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#4267B2] rounded-full mr-2"></div>
            <span>Facebook</span>
          </div>
        )}
        {data[0]?.linkedin !== undefined && (
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#0077B5] rounded-full mr-2"></div>
            <span>LinkedIn</span>
          </div>
        )}
      </div>
      
      {/* Recharts visualization - only render on client side */}
      <div className="w-full h-64">
        {isClient ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                tickMargin={10}
                stroke="#9CA3AF"
              />
              <YAxis 
                tickFormatter={(value: number) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
                tick={{ fontSize: 12 }}
                stroke="#9CA3AF"
              />
              <Tooltip 
                formatter={(value: number) => [formatNumber(value), '']} 
                labelFormatter={(label: string) => `Date: ${label}`}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  borderRadius: '6px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB'
                }}
              />
              <Legend align="center" verticalAlign="bottom" height={36} />
              {data[0]?.instagram !== undefined && (
                <Line 
                  type="monotone" 
                  dataKey="instagram" 
                  stroke="#E1306C" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }}
                  name="Instagram"
                />
              )}
              {data[0]?.twitter !== undefined && (
                <Line 
                  type="monotone" 
                  dataKey="twitter" 
                  stroke="#1DA1F2" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }}
                  name="Twitter"
                />
              )}
              {data[0]?.facebook !== undefined && (
                <Line 
                  type="monotone" 
                  dataKey="facebook" 
                  stroke="#4267B2" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }}
                  name="Facebook"
                />
              )}
              {data[0]?.linkedin !== undefined && (
                <Line 
                  type="monotone" 
                  dataKey="linkedin" 
                  stroke="#0077B5" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }}
                  name="LinkedIn"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          // Placeholder for server-side rendering
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">Loading chart data...</p>
          </div>
        )}
      </div>
      
      {/* Fallback table for data exploration */}
      <div className="mt-6 overflow-x-auto hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 text-gray-800 dark:text-gray-200 font-semibold">Date</th>
              {data[0]?.instagram !== undefined && <th className="text-right py-2 text-gray-800 dark:text-gray-200 font-semibold">Instagram</th>}
              {data[0]?.twitter !== undefined && <th className="text-right py-2 text-gray-800 dark:text-gray-200 font-semibold">Twitter</th>}
              {data[0]?.facebook !== undefined && <th className="text-right py-2 text-gray-800 dark:text-gray-200 font-semibold">Facebook</th>}
              {data[0]?.linkedin !== undefined && <th className="text-right py-2 text-gray-800 dark:text-gray-200 font-semibold">LinkedIn</th>}
            </tr>
          </thead>
          <tbody>
            {isClient ? data.slice(0, 5).map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}>
                <td className="py-2 text-gray-800 dark:text-gray-200 font-medium">{item.date}</td>
                {item.instagram !== undefined && (
                  <td className="text-right py-2 font-medium text-[#E1306C] dark:text-[#FF6B9E]">{item.instagram.toLocaleString()}</td>
                )}
                {item.twitter !== undefined && (
                  <td className="text-right py-2 font-medium text-[#1DA1F2] dark:text-[#5BBCFF]">{item.twitter.toLocaleString()}</td>
                )}
                {item.facebook !== undefined && (
                  <td className="text-right py-2 font-medium text-[#4267B2] dark:text-[#6D8FD9]">{item.facebook.toLocaleString()}</td>
                )}
                {item.linkedin !== undefined && (
                  <td className="text-right py-2 font-medium text-[#0077B5] dark:text-[#2D9CDB]">{item.linkedin.toLocaleString()}</td>
                )}
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
