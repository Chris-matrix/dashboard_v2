import { ObjectId } from 'mongodb';

/**
 * User model for authentication and user management
 */
export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string; // This should be hashed
  role: 'admin' | 'user';
  company?: string;
  avatar?: string;
  lastLogin?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User data without sensitive information for client-side
 */
export type SafeUser = Omit<User, 'password'>;

/**
 * User input for registration
 */
export type UserInput = Omit<User, '_id' | 'createdAt' | 'updatedAt'>;

export default User;
