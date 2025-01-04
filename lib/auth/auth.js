import mongoClientPromise from "@/db/mongoClientPromise";
import { User } from "@/models/user-model";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvier from "next-auth/providers/google";

import { CredentialsSignin } from "next-auth";

class InvalidLoginError extends CredentialsSignin {
    code = 'Invalid identifier or password'
}

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter : MongoDBAdapter(mongoClientPromise, {
        databaseName : process.env.DB_NAME
    }),
    session : {
        strategy : "jwt",
    },

    providers : [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    return null
                } 

                try {
                    const user = await User.findOne({email : credentials.email}).lean()

                    if(!user) {
                        throw new Error("Wrong credentials.")
                    }

                    const passwordMatch = await bcryptjs.compare(credentials.password, user.password);

                    if(!passwordMatch){
                        throw new Error("Wrong credentials.")
                    }

                    return {
                        id : user._id,
                        email : user.email,
                        name : user.name
                    } 
                } catch (error) {
                    throw new Error("Wrong credentials.")
                }
            },
        }),
        GoogleProvier({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.AUTHJS_SECRET
})