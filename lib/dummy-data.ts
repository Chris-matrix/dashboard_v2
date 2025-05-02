import { format, subDays, subMonths } from 'date-fns';
import type { PlatformStat, EngagementData, TopPost, AIRecommendation, AudienceDemographic, ContentCalendarItem, SentimentData, CompetitorData, CampaignData, HashtagData } from '../types';
import React from 'react';

// Platform statistics
export const platformStats = [
  {
    id: 'instagram',
    name: 'Instagram',
    followers: 68521,
    followersChange: 15.3,
    posts: 342,
    engagement: 4.8,
    impressions: 523450,
    reach: 412300,
    color: '#E1306C',
    icon: React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" }),
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z" })
    ),
  },
  {
    id: 'twitter',
    name: 'Twitter',
    followers: 32145,
    followersChange: 8.7,
    posts: 512,
    engagement: 3.2,
    impressions: 321450,
    reach: 245300,
    color: '#1DA1F2',
    icon: React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" })
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    followers: 15782,
    followersChange: 5.2,
    posts: 215,
    engagement: 2.8,
    impressions: 198450,
    reach: 156300,
    color: '#4267B2',
    icon: React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" })
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    followers: 8445,
    followersChange: 12.1,
    posts: 124,
    engagement: 3.5,
    impressions: 87450,
    reach: 65300,
    color: '#0077B5',
    icon: React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
    ),
  },
];

// Generate dummy chart data for the last 30 days
export const generateEngagementData = (days = 30) => {
  const data = [];
  for (let i = days; i >= 0; i--) {
    const date = subDays(new Date(), i);
    data.push({
      date: format(date, 'MMM dd'),
      instagram: Math.floor(Math.random() * 1000) + 2000,
      twitter: Math.floor(Math.random() * 800) + 1500,
      facebook: Math.floor(Math.random() * 600) + 1000,
      linkedin: Math.floor(Math.random() * 400) + 500,
    });
  }
  return data;
};

// Generate dummy chart data for follower growth
export const generateFollowerGrowthData = (months = 12) => {
  const data = [];
  let instagram = 50000;
  let twitter = 25000;
  let facebook = 12000;
  let linkedin = 5000;
  
  for (let i = months; i >= 0; i--) {
    const date = subMonths(new Date(), i);
    
    // Add growth with some randomness (except for the first entry)
    if (i !== months && data.length > 0) {
      instagram += Math.floor(instagram * (0.02 + Math.random() * 0.03));
      twitter += Math.floor(twitter * (0.015 + Math.random() * 0.025));
      facebook += Math.floor(facebook * (0.01 + Math.random() * 0.02));
      linkedin += Math.floor(linkedin * (0.025 + Math.random() * 0.035));
    }
    
    data.unshift({
      date: format(date, 'MMM yyyy'),
      instagram,
      twitter,
      facebook,
      linkedin,
    });
  }
  return data;
};

// Top performing posts
export const topPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'Check out our new product line! #NewLaunch #ExcitingTimes',
    engagement: 2543,
    impressions: 15432,
    likes: 2134,
    comments: 342,
    shares: 67,
    date: '2 days ago',
    image: 'https://via.placeholder.com/800x600/E1306C/FFFFFF?text=Product+Launch',
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'We\'re excited to announce our partnership with @BigCompany! Stay tuned for more updates. #Partnership #Growth',
    engagement: 1876,
    impressions: 12543,
    likes: 1543,
    comments: 231,
    shares: 102,
    date: '5 days ago',
    image: null,
  },
  {
    id: 3,
    platform: 'Facebook',
    content: 'Our annual customer appreciation event is coming up next month. RSVP now to secure your spot!',
    engagement: 1254,
    impressions: 8765,
    likes: 987,
    comments: 156,
    shares: 111,
    date: '1 week ago',
    image: 'https://via.placeholder.com/800x600/4267B2/FFFFFF?text=Customer+Event',
  },
  {
    id: 4,
    platform: 'LinkedIn',
    content: 'We\'re hiring! Join our team of passionate professionals and help us shape the future of digital marketing.',
    engagement: 943,
    impressions: 6543,
    likes: 765,
    comments: 98,
    shares: 80,
    date: '1 week ago',
    image: 'https://via.placeholder.com/800x600/0077B5/FFFFFF?text=We+Are+Hiring',
  },
  {
    id: 5,
    platform: 'Instagram',
    content: 'Behind the scenes at our latest photoshoot. #BTS #TeamWork',
    engagement: 2187,
    impressions: 13245,
    likes: 1876,
    comments: 254,
    shares: 57,
    date: '2 weeks ago',
    image: 'https://via.placeholder.com/800x600/E1306C/FFFFFF?text=Behind+The+Scenes',
  },
  {
    id: 6,
    platform: 'Twitter',
    content: 'What features would you like to see in our next product update? Let us know in the comments! #Feedback #ProductDevelopment',
    engagement: 1654,
    impressions: 10987,
    likes: 1321,
    comments: 287,
    shares: 46,
    date: '2 weeks ago',
    image: null,
  },
];

// AI Recommendations
export const aiRecommendations = [
  {
    id: 1,
    title: 'Increase Instagram Engagement',
    description: 'Your Instagram engagement has been trending upward. Consider posting more content similar to your recent product showcase posts which received 35% higher engagement than your average posts.',
    type: 'engagement',
    platform: 'instagram',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Optimal Posting Time',
    description: 'Based on your audience activity, the best times to post are weekdays between 12-1 PM and 5-6 PM. Consider scheduling your content during these peak engagement hours.',
    type: 'timing',
    platform: 'all',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Content Strategy',
    description: 'Your audience responds well to behind-the-scenes content and customer testimonials. We recommend increasing this type of content by 20% in your content mix for the next month.',
    type: 'content',
    platform: 'all',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Twitter Hashtag Strategy',
    description: 'Your tweets with industry-specific hashtags are performing 28% better than those without. Consider using 2-3 relevant hashtags in each tweet for optimal visibility.',
    type: 'hashtags',
    platform: 'twitter',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Facebook Video Content',
    description: 'Facebook video posts are generating 45% more engagement than image posts. Consider creating more short-form video content (60-90 seconds) for this platform.',
    type: 'content',
    platform: 'facebook',
    priority: 'high',
  },
  {
    id: 6,
    title: 'LinkedIn Article Performance',
    description: 'Your thought leadership articles on LinkedIn are receiving high engagement. Publishing 1-2 industry insights articles per month could increase your professional audience by an estimated 15%.',
    type: 'content',
    platform: 'linkedin',
    priority: 'medium',
  },
];

// Audience demographics
export const audienceDemographics = {
  ageGroups: [
    { age: '18-24', percentage: 22 },
    { age: '25-34', percentage: 38 },
    { age: '35-44', percentage: 25 },
    { age: '45-54', percentage: 10 },
    { age: '55+', percentage: 5 },
  ],
  genders: [
    { gender: 'Female', percentage: 58 },
    { gender: 'Male', percentage: 41 },
    { gender: 'Other', percentage: 1 },
  ],
  locations: [
    { country: 'United States', percentage: 45 },
    { country: 'United Kingdom', percentage: 15 },
    { country: 'Canada', percentage: 12 },
    { country: 'Australia', percentage: 8 },
    { country: 'Germany', percentage: 5 },
    { country: 'France', percentage: 4 },
    { country: 'Other', percentage: 11 },
  ],
  interests: [
    { interest: 'Technology', percentage: 65 },
    { interest: 'Business', percentage: 58 },
    { interest: 'Marketing', percentage: 52 },
    { interest: 'Design', percentage: 45 },
    { interest: 'Entrepreneurship', percentage: 42 },
    { interest: 'Innovation', percentage: 38 },
    { interest: 'Finance', percentage: 25 },
  ],
};

// Content calendar
export const contentCalendar = [
  {
    id: 1,
    title: 'Product Feature Highlight',
    description: 'Showcase the new analytics dashboard feature with screenshots and benefits',
    platform: 'all',
    scheduledDate: '2025-05-05T10:00:00',
    status: 'scheduled',
    assignedTo: 'Jane Smith',
    contentType: 'image',
  },
  {
    id: 2,
    title: 'Customer Success Story',
    description: 'Interview with Acme Corp about how they increased conversions by 35%',
    platform: 'linkedin',
    scheduledDate: '2025-05-07T14:00:00',
    status: 'draft',
    assignedTo: 'John Doe',
    contentType: 'article',
  },
  {
    id: 3,
    title: 'Behind the Scenes',
    description: 'Team brainstorming session for upcoming feature development',
    platform: 'instagram',
    scheduledDate: '2025-05-09T12:00:00',
    status: 'scheduled',
    assignedTo: 'Jane Smith',
    contentType: 'video',
  },
  {
    id: 4,
    title: 'Industry Tip Tuesday',
    description: '5 ways to optimize your social media strategy in 2025',
    platform: 'twitter',
    scheduledDate: '2025-05-14T09:00:00',
    status: 'idea',
    assignedTo: 'Unassigned',
    contentType: 'text',
  },
  {
    id: 5,
    title: 'Product Demo Webinar',
    description: 'Live demonstration of new features with Q&A session',
    platform: 'facebook',
    scheduledDate: '2025-05-16T15:00:00',
    status: 'in-progress',
    assignedTo: 'John Doe',
    contentType: 'live',
  },
  {
    id: 6,
    title: 'User Poll',
    description: 'Ask followers which feature they would like to see developed next',
    platform: 'twitter',
    scheduledDate: '2025-05-20T11:00:00',
    status: 'scheduled',
    assignedTo: 'Jane Smith',
    contentType: 'poll',
  },
  {
    id: 7,
    title: 'Team Member Spotlight',
    description: 'Interview with our new Head of Product Development',
    platform: 'linkedin',
    scheduledDate: '2025-05-22T13:00:00',
    status: 'draft',
    assignedTo: 'John Doe',
    contentType: 'article',
  },
  {
    id: 8,
    title: 'Product Update Announcement',
    description: 'Release notes for version 2.5 with key improvements',
    platform: 'all',
    scheduledDate: '2025-05-25T10:00:00',
    status: 'idea',
    assignedTo: 'Unassigned',
    contentType: 'image',
  },
];

// User data
export const users = [
  {
    id: 1,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    lastActive: '2025-05-02T08:45:00',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Content Specialist',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastActive: '2025-05-01T16:30:00',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    role: 'Social Media Coordinator',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    lastActive: '2025-05-02T09:15:00',
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Digital Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    lastActive: '2025-04-30T14:20:00',
  },
];

// Sentiment analysis data
export const sentimentAnalysis = {
  overall: {
    positive: 68,
    neutral: 24,
    negative: 8,
  },
  byPlatform: [
    {
      platform: 'instagram',
      positive: 72,
      neutral: 22,
      negative: 6,
    },
    {
      platform: 'twitter',
      positive: 65,
      neutral: 20,
      negative: 15,
    },
    {
      platform: 'facebook',
      positive: 70,
      neutral: 25,
      negative: 5,
    },
    {
      platform: 'linkedin',
      positive: 82,
      neutral: 15,
      negative: 3,
    },
  ],
  trending: [
    {
      keyword: 'great service',
      count: 145,
      sentiment: 'positive',
    },
    {
      keyword: 'helpful support',
      count: 98,
      sentiment: 'positive',
    },
    {
      keyword: 'user friendly',
      count: 87,
      sentiment: 'positive',
    },
    {
      keyword: 'expensive',
      count: 42,
      sentiment: 'negative',
    },
    {
      keyword: 'difficult to use',
      count: 38,
      sentiment: 'negative',
    },
  ],
};

// Competitor analysis
export const competitorAnalysis = [
  {
    id: 1,
    name: 'CompetitorA',
    followers: {
      instagram: 82450,
      twitter: 45320,
      facebook: 23450,
      linkedin: 12340,
    },
    engagement: {
      instagram: 3.8,
      twitter: 2.5,
      facebook: 2.2,
      linkedin: 4.1,
    },
    postFrequency: {
      instagram: 5,
      twitter: 12,
      facebook: 3,
      linkedin: 2,
    },
    strengths: ['Video content', 'Influencer partnerships', 'Community engagement'],
    weaknesses: ['Inconsistent branding', 'Low response rate to comments'],
  },
  {
    id: 2,
    name: 'CompetitorB',
    followers: {
      instagram: 54320,
      twitter: 65430,
      facebook: 32150,
      linkedin: 9870,
    },
    engagement: {
      instagram: 4.2,
      twitter: 3.8,
      facebook: 2.5,
      linkedin: 3.2,
    },
    postFrequency: {
      instagram: 7,
      twitter: 15,
      facebook: 4,
      linkedin: 3,
    },
    strengths: ['Consistent posting schedule', 'Strong visual identity', 'Educational content'],
    weaknesses: ['Limited platform diversity', 'Low video content quality'],
  },
  {
    id: 3,
    name: 'CompetitorC',
    followers: {
      instagram: 35670,
      twitter: 28760,
      facebook: 45230,
      linkedin: 18540,
    },
    engagement: {
      instagram: 5.1,
      twitter: 2.8,
      facebook: 3.6,
      linkedin: 4.8,
    },
    postFrequency: {
      instagram: 3,
      twitter: 8,
      facebook: 5,
      linkedin: 4,
    },
    strengths: ['High-quality content', 'Strong thought leadership', 'Active community management'],
    weaknesses: ['Infrequent posting', 'Limited use of trending topics'],
  },
];

// Campaign performance data
export const campaignPerformance = [
  {
    id: 1,
    name: 'Summer Product Launch',
    startDate: '2025-04-01',
    endDate: '2025-04-15',
    budget: 5000,
    spend: 4850,
    impressions: 245000,
    engagement: 15430,
    clicks: 8760,
    conversions: 342,
    roi: 2.8,
    platforms: ['instagram', 'facebook', 'twitter'],
  },
  {
    id: 2,
    name: 'Customer Appreciation Week',
    startDate: '2025-03-15',
    endDate: '2025-03-22',
    budget: 3000,
    spend: 2950,
    impressions: 187000,
    engagement: 12540,
    clicks: 6540,
    conversions: 278,
    roi: 2.3,
    platforms: ['instagram', 'facebook'],
  },
  {
    id: 3,
    name: 'Industry Conference Promotion',
    startDate: '2025-02-10',
    endDate: '2025-02-28',
    budget: 7500,
    spend: 7450,
    impressions: 320000,
    engagement: 18760,
    clicks: 12450,
    conversions: 520,
    roi: 3.2,
    platforms: ['linkedin', 'twitter', 'facebook'],
  },
  {
    id: 4,
    name: 'Holiday Special Offer',
    startDate: '2024-12-01',
    endDate: '2024-12-25',
    budget: 10000,
    spend: 9875,
    impressions: 450000,
    engagement: 32450,
    clicks: 18760,
    conversions: 876,
    roi: 4.1,
    platforms: ['instagram', 'facebook', 'twitter', 'linkedin'],
  },
];

// Hashtag performance
export const hashtagPerformance = [
  {
    tag: '#ProductLaunch',
    posts: 24,
    reach: 87650,
    engagement: 5430,
    sentiment: 'positive',
  },
  {
    tag: '#IndustryInsights',
    posts: 18,
    reach: 65430,
    engagement: 4320,
    sentiment: 'positive',
  },
  {
    tag: '#CustomerSuccess',
    posts: 15,
    reach: 54320,
    engagement: 3870,
    sentiment: 'positive',
  },
  {
    tag: '#TipTuesday',
    posts: 12,
    reach: 43210,
    engagement: 2980,
    sentiment: 'neutral',
  },
  {
    tag: '#BehindTheScenes',
    posts: 9,
    reach: 38760,
    engagement: 2540,
    sentiment: 'positive',
  },
];
