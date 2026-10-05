import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_URL}`);
const db = client.db("bangla-news");

export const auth = betterAuth({
    database: mongodbAdapter (db,{
        client
    }),
    emailAndPassword:{
        enabled: true,
    },

    
}) 