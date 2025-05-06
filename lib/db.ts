import { Collection, Db, Document, ObjectId } from 'mongodb';
import clientPromise from './mongodb';

// Cache the database connection
let db: Db | null = null;

/**
 * Get a database collection with proper error handling
 * @param collectionName The name of the collection to access
 * @returns The MongoDB collection
 */
export async function getCollection<T extends Document>(collectionName: string): Promise<Collection<T>> {
  try {
    if (!db) {
      const client = await clientPromise;
      db = client.db(process.env.MONGODB_DB || 'social_dashboard');
    }
    return db.collection<T>(collectionName);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw new Error('Unable to connect to the database');
  }
}

/**
 * Generic function to find documents in a collection
 * @param collectionName The name of the collection
 * @param query The query to filter documents
 * @returns Array of documents
 */
export async function findDocuments<T extends Document>(
  collectionName: string, 
  query: Document = {}
): Promise<T[]> {
  try {
    const collection = await getCollection<T>(collectionName);
    return await collection.find(query).toArray();
  } catch (error) {
    console.error(`Error finding documents in ${collectionName}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generic function to find a single document by ID
 * @param collectionName The name of the collection
 * @param id The document ID
 * @returns The document or null if not found
 */
export async function findDocumentById<T extends Document>(
  collectionName: string,
  id: string | ObjectId
): Promise<T | null> {
  try {
    const collection = await getCollection<T>(collectionName);
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    return await collection.findOne({ _id: objectId } as any) as T | null;
  } catch (error) {
    console.error(`Error finding document by ID in ${collectionName}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generic function to insert a document
 * @param collectionName The name of the collection
 * @param document The document to insert
 * @returns The inserted document ID
 */
export async function insertDocument<T extends Document>(
  collectionName: string,
  document: T
): Promise<string> {
  try {
    const collection = await getCollection<T>(collectionName);
    const now = new Date();
    const documentWithTimestamps = {
      ...document,
      createdAt: now,
      updatedAt: now
    };
    const result = await collection.insertOne(documentWithTimestamps as any);
    return result.insertedId.toString();
  } catch (error) {
    console.error(`Error inserting document into ${collectionName}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generic function to update a document
 * @param collectionName The name of the collection
 * @param id The document ID
 * @param update The update operations
 * @returns True if successful
 */
export async function updateDocument<T extends Document>(
  collectionName: string,
  id: string | ObjectId,
  update: Partial<T>
): Promise<boolean> {
  try {
    const collection = await getCollection<T>(collectionName);
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
    console.error(`Error updating document in ${collectionName}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generic function to delete a document
 * @param collectionName The name of the collection
 * @param id The document ID
 * @returns True if successful
 */
export async function deleteDocument(
  collectionName: string,
  id: string | ObjectId
): Promise<boolean> {
  try {
    const collection = await getCollection(collectionName);
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.deleteOne({ _id: objectId } as any);
    return result.deletedCount > 0;
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
