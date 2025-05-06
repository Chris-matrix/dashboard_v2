import { Collection, Db, Document, Filter, ObjectId, WithId } from 'mongodb';
import clientPromise from './mongodb';
import { CollectionMap } from './mongodb';

// Cache the database connection
let db: Db | null = null;

/**
 * Get a database connection with proper error handling
 * @returns MongoDB database instance
 */
export async function getDb(): Promise<Db> {
  try {
    if (!db) {
      const client = await clientPromise;
      db = client.db(process.env.MONGODB_DB || 'social_dashboard');
    }
    return db;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw new Error('Unable to connect to the database');
  }
}

/**
 * Get a typed database collection with proper error handling
 * @param collectionName The name of the collection to access
 * @returns The MongoDB collection with proper typing
 */
export async function getCollection<K extends keyof CollectionMap>(
  collectionName: K
): Promise<Collection<CollectionMap[K]>> {
  try {
    const database = await getDb();
    return database.collection<CollectionMap[K]>(collectionName as string);
  } catch (error) {
    console.error(`Failed to get collection ${String(collectionName)}:`, error);
    throw new Error(`Unable to access collection ${String(collectionName)}`);
  }
}

/**
 * Find documents in a collection with pagination
 * @param collectionName The name of the collection
 * @param filter The filter to apply
 * @param page The page number (1-based)
 * @param limit The number of items per page
 * @returns Object containing the documents and pagination info
 */
export async function findPaginated<K extends keyof CollectionMap>(
  collectionName: K,
  filter: Filter<CollectionMap[K]> = {},
  page = 1,
  limit = 10,
  sort: Record<string, 1 | -1> = { createdAt: -1 }
): Promise<{
  items: WithId<CollectionMap[K]>[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> {
  try {
    const collection = await getCollection(collectionName);
    const skip = (page - 1) * limit;
    
    const [items, total] = await Promise.all([
      collection.find(filter).sort(sort).skip(skip).limit(limit).toArray(),
      collection.countDocuments(filter)
    ]);
    
    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  } catch (error) {
    console.error(`Error finding documents in ${String(collectionName)}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Find a single document by ID with proper typing
 * @param collectionName The name of the collection
 * @param id The document ID
 * @returns The document or null if not found
 */
export async function findById<K extends keyof CollectionMap>(
  collectionName: K,
  id: string | ObjectId
): Promise<WithId<CollectionMap[K]> | null> {
  try {
    const collection = await getCollection(collectionName);
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    return collection.findOne({ _id: objectId } as any);
  } catch (error) {
    console.error(`Error finding document by ID in ${String(collectionName)}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Insert a document with proper typing
 * @param collectionName The name of the collection
 * @param document The document to insert
 * @returns The inserted document ID
 */
export async function insertOne<K extends keyof CollectionMap>(
  collectionName: K,
  document: Omit<CollectionMap[K], '_id' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  try {
    const collection = await getCollection(collectionName);
    const now = new Date();
    const documentWithTimestamps = {
      ...document,
      createdAt: now,
      updatedAt: now
    } as CollectionMap[K];
    
    const result = await collection.insertOne(documentWithTimestamps);
    return result.insertedId.toString();
  } catch (error) {
    console.error(`Error inserting document into ${String(collectionName)}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Update a document with proper typing
 * @param collectionName The name of the collection
 * @param id The document ID
 * @param update The update operations
 * @returns True if successful
 */
export async function updateById<K extends keyof CollectionMap>(
  collectionName: K,
  id: string | ObjectId,
  update: Partial<Omit<CollectionMap[K], '_id' | 'createdAt'>>
): Promise<boolean> {
  try {
    const collection = await getCollection(collectionName);
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    const updateWithTimestamp = {
      ...update,
      updatedAt: new Date()
    };
    
    const result = await collection.updateOne(
      { _id: objectId } as any,
      { $set: updateWithTimestamp }
    );
    
    return result.modifiedCount > 0;
  } catch (error) {
    console.error(`Error updating document in ${String(collectionName)}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Delete a document with proper typing
 * @param collectionName The name of the collection
 * @param id The document ID
 * @returns True if successful
 */
export async function deleteById<K extends keyof CollectionMap>(
  collectionName: K,
  id: string | ObjectId
): Promise<boolean> {
  try {
    const collection = await getCollection(collectionName);
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.deleteOne({ _id: objectId } as any);
    return result.deletedCount > 0;
  } catch (error) {
    console.error(`Error deleting document from ${String(collectionName)}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
