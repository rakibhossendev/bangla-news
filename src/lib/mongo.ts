import { MongoClient } from "mongodb";

export const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_URL}`);
export const db = client.db("bangla-news");
