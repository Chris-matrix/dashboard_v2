import { ObjectId } from 'mongodb';

export interface Activity {
  _id?: ObjectId;
  platformId: ObjectId;
  userId: ObjectId;
  type: 'post' | 'comment' | 'like' | 'share' | 'message' | 'other';
  content?: string;
  mediaUrl?: string;
  externalId?: string;
  engagement: {
    likes?: number;
    comments?: number;
    shares?: number;
    impressions?: number;
    reach?: number;
  };
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default Activity;
