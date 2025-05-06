import { MongoClient, MongoClientOptions, ServerApiVersion, Collection, Document } from 'mongodb';
import { User } from '../models/User';
import { Platform } from '../models/Platform';
import { Activity } from '../models/Activity';
import { Stats } from '../models/Stats';

if (!process.env.MONGODB_URI) {
  console.warn('MONGODB_URI environment variable is not defined. Using mock database connection.');
}

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/social_dashboard';
const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Add connection timeout to prevent hanging
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Define collection types for better type safety
export interface CollectionMap {
  users: User;
  platforms: Platform;
  activities: Activity;
  stats: Stats;
}

// Mock client for testing when MongoDB is not available
const createMockClient = () => {
  console.warn('Using mock MongoDB client. Data operations will not persist.');
  const mockCollections: Record<string, any[]> = {
    users: [],
    platforms: [],
    activities: [],
    stats: []
  };
  
  // Create a mock MongoDB client with proper TypeScript types
  const mockClient = {
    db: (dbName?: string) => ({
      collection: <T extends Document>(name: string): Collection<T> => {
        if (!mockCollections[name]) {
          mockCollections[name] = [];
        }
        
        return {
          find: (query = {}) => ({
            toArray: async (): Promise<T[]> => mockCollections[name] as T[],
            limit: () => ({
              toArray: async (): Promise<T[]> => mockCollections[name].slice(0, 10) as T[]
            }),
            sort: () => ({
              toArray: async (): Promise<T[]> => mockCollections[name] as T[]
            }),
            skip: () => ({
              limit: () => ({
                toArray: async (): Promise<T[]> => mockCollections[name].slice(0, 10) as T[]
              })
            })
          }),
          findOne: async (query = {}): Promise<T | null> => {
            return (mockCollections[name][0] || null) as T | null;
          },
          insertOne: async (doc: T) => {
            // Create a mock ObjectId for testing purposes
            // Use a string ID for the mock database to avoid ObjectId issues
            const id = { toString: () => Math.random().toString(36).substring(2, 15) };
            const docWithId = { ...doc, _id: id };
            mockCollections[name].push(docWithId);
            return { insertedId: id, acknowledged: true };
          },
          updateOne: async (filter: object, update: object) => {
            return { modifiedCount: 1, acknowledged: true };
          },
          deleteOne: async (filter: object) => {
            return { deletedCount: 1, acknowledged: true };
          },
          countDocuments: async () => mockCollections[name].length
        } as unknown as Collection<T>;
      },
      listCollections: () => ({
        toArray: async () => Object.keys(mockCollections).map(name => ({ name }))
      })
    }),
    connect: async () => mockClient
  } as any;
  
  return Promise.resolve(mockClient as unknown as MongoClient);
};

// Function to create a real client with error handling
const createRealClient = async () => {
  try {
    // Use a workaround to avoid TypeScript errors
    const { MongoClient: ActualMongoClient } = require('mongodb');
    client = new ActualMongoClient(uri, options);
    return await client.connect();
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    console.warn('Falling back to mock MongoDB client');
    return createMockClient();
  }
};

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = createRealClient();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = createRealClient();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
