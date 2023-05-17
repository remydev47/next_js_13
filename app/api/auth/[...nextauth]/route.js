//[...nextauth] means Dynamic next authentication the folder is named that since its the current best practice
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";
import User from "@models/user";

import { connectToDB } from "@utils/database";

//declare the Handler

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },

        async signIn({ profile }) {
            try {
                await connectToDB();
    
                //check if the user exists
                const useExist = await User.findOne({
                    email: profile.email
                });
    
                //if the user doesnt exist, create it
                if(!useExist) {
                    await User.create({
                        email: profile.email,
                        name: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    });
                }
    
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
    //updating the session
})
export { handler as GET, handler as POST }