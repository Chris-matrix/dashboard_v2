'use client';
import React from 'react';

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
  // Calculate max value for scaling
  const maxValue = Math.max(
    ...data.flatMap(item => [
      item.instagram || 0,
      item.twitter || 0,
      item.facebook || 0,
      item.linkedin || 0
    ])
  );

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
      
      {/* Simple table based chart */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2">Date</th>
              {data[0]?.instagram !== undefined && <th className="text-right py-2">Instagram</th>}
              {data[0]?.twitter !== undefined && <th className="text-right py-2">Twitter</th>}
              {data[0]?.facebook !== undefined && <th className="text-right py-2">Facebook</th>}
              {data[0]?.linkedin !== undefined && <th className="text-right py-2">LinkedIn</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2">{item.date}</td>
                {item.instagram !== undefined && (
                  <td className="text-right py-2 text-[#E1306C]">{item.instagram.toLocaleString()}</td>
                )}
                {item.twitter !== undefined && (
                  <td className="text-right py-2 text-[#1DA1F2]">{item.twitter.toLocaleString()}</td>
                )}
                {item.facebook !== undefined && (
                  <td className="text-right py-2 text-[#4267B2]">{item.facebook.toLocaleString()}</td>
                )}
                {item.linkedin !== undefined && (
                  <td className="text-right py-2 text-[#0077B5]">{item.linkedin.toLocaleString()}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Note: Chart visualization simplified for compatibility
      </div>
    </div>
  );
}
