import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { client, db } from "./mongo";

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    database: mongodbAdapter (db,{
        client
    }),
    emailAndPassword:{
        enabled: true,
    },

    socialProviders:{
        google:{
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECERET_KEY as string
        },
        github:{
            clientId: process.env.BETTER_AUTH_GITHUB_AUTH_CLINET_ID as string,
            clientSecret: process.env.BETTER_AUTH_GITHUB_AUTH_SECRET_KEY
        }
    }
    
}) 