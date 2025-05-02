// Type declarations for the project

// Declare module for recharts
declare module 'recharts' {
  export const LineChart: any;
  export const Line: any;
  export const XAxis: any;
  export const YAxis: any;
  export const CartesianGrid: any;
  export const Tooltip: any;
  export const Legend: any;
  export const ResponsiveContainer: any;
}

// Extend the JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Types for our dummy data
interface PlatformStat {
  platform: string;
  followers: number;
  engagement: number;
  change: number;
  icon: string;
}

interface EngagementData {
  name: string;
  facebook: number;
  twitter: number;
  instagram: number;
  linkedin: number;
}

interface TopPost {
  id: string;
  platform: string;
  content: string;
  engagement: number;
  date: string;
  image?: string;
}

interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
}

interface AudienceDemographic {
  age: string;
  percentage: number;
}

interface ContentCalendarItem {
  id: string;
  title: string;
  platform: string;
  date: string;
  status: string;
}

interface SentimentData {
  name: string;
  positive: number;
  neutral: number;
  negative: number;
}

interface CompetitorData {
  name: string;
  followers: number;
  engagement: number;
  growth: number;
}

interface CampaignData {
  id: string;
  name: string;
  platform: string;
  reach: number;
  engagement: number;
  conversion: number;
  roi: number;
}

interface HashtagData {
  tag: string;
  reach: number;
  engagement: number;
  trend: number;
}

// Export all types
export type {
  PlatformStat,
  EngagementData,
  TopPost,
  AIRecommendation,
  AudienceDemographic,
  ContentCalendarItem,
  SentimentData,
  CompetitorData,
  CampaignData,
  HashtagData
};
