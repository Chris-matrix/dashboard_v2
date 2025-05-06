declare module 'mongodb' {
  // Re-export all types from the original mongodb module
  export * from 'mongodb';
  
  // Explicitly declare types that are causing issues
  export class ObjectId {
    constructor(id?: string | ObjectId | Buffer);
    toString(): string;
    toHexString(): string;
    equals(otherId: ObjectId): boolean;
    getTimestamp(): Date;
  }
  
  export interface Document {
    [key: string]: any;
  }
  
  export interface Db {
    collection<T extends Document>(name: string): Collection<T>;
    listCollections(): { toArray(): Promise<Array<{ name: string }>> };
  }
  
  export interface MongoClient {
    db(name?: string): Db;
    connect(): Promise<MongoClient>;
  }
  
  export interface MongoClientOptions {
    serverApi?: {
      version: string;
      strict?: boolean;
      deprecationErrors?: boolean;
    };
    connectTimeoutMS?: number;
    socketTimeoutMS?: number;
  }
  
  export interface Collection<T extends Document> {
    find(query?: any): {
      toArray(): Promise<Array<T & { _id: ObjectId }>>;
      limit(n: number): { toArray(): Promise<Array<T & { _id: ObjectId }>> };
      sort(sort: any): { 
        toArray(): Promise<Array<T & { _id: ObjectId }>>;
        skip(n: number): { limit(n: number): { toArray(): Promise<Array<T & { _id: ObjectId }>> } };
      };
      skip(n: number): { limit(n: number): { toArray(): Promise<Array<T & { _id: ObjectId }>> } };
    };
    findOne(query: any): Promise<(T & { _id: ObjectId }) | null>;
    insertOne(doc: T): Promise<{ insertedId: ObjectId; acknowledged: boolean }>;
    updateOne(filter: any, update: any): Promise<{ modifiedCount: number; acknowledged: boolean }>;
    deleteOne(filter: any): Promise<{ deletedCount: number; acknowledged: boolean }>;
    countDocuments(query?: any): Promise<number>;
  }
  
  export type Filter<T> = {
    [P in keyof T]?: T[P] | { $in: T[P][] } | { $gt: T[P] } | { $gte: T[P] } | { $lt: T[P] } | { $lte: T[P] } | { $ne: T[P] };
  } & {
    $or?: Array<Filter<T>>;
    $and?: Array<Filter<T>>;
  };
  
  export type WithId<T> = T & { _id: ObjectId };
  
  export const ServerApiVersion: { v1: string };
}
