import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Test the MongoDB connection
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'social_dashboard');
    
    // Perform a simple operation to verify connection
    const collections = await db.listCollections().toArray();
    
    // Create test collections if they don't exist
    const collectionNames = collections.map((c: { name: string }) => c.name);
    const requiredCollections = ['users', 'platforms', 'activities', 'stats'];
    const missingCollections = requiredCollections.filter(name => !collectionNames.includes(name));
    
    // Report on collections status
    return res.status(200).json({ 
      success: true, 
      message: 'Database connection successful',
      collections: collectionNames,
      missingCollections: missingCollections,
      environment: process.env.NODE_ENV,
      databaseName: process.env.MONGODB_DB || 'social_dashboard',
      usingMock: collectionNames.length === 0 ? 'Possibly using mock database' : 'Real database connection'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to connect to database',
      error: error instanceof Error ? error.message : 'Unknown error',
      solution: 'Check if MongoDB is running locally or update your connection string in .env.local'
    });
  }
}
