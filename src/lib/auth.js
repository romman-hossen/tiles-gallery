import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { config } from "@/config/config";

const client = new MongoClient(process.env.MONGODB_URI);
// const client = new MongoClient(config.betterSecret);
const db = client.db("TilesGallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
   emailAndPassword: {
    enabled: true,
  },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});
