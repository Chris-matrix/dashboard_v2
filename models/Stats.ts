import { ObjectId } from 'mongodb';

export interface Stats {
  _id?: ObjectId;
  platformId: ObjectId;
  userId: ObjectId;
  date: Date;
  followers: number;
  followersChange: number;
  posts: number;
  engagement: number;
  impressions: number;
  reach: number;
  demographics?: {
    ageGroups?: Array<{ age: string; percentage: number }>;
    genderSplit?: { male: number; female: number; other: number };
    locations?: Array<{ location: string; percentage: number }>;
  };
  createdAt: Date;
  updatedAt: Date;
}

export default Stats;
