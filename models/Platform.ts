import { ObjectId } from 'mongodb';

export interface Platform {
  _id?: ObjectId;
  name: string;
  type: 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'other';
  userId: ObjectId;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiry?: Date;
  profileId?: string;
  profileName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default Platform;
