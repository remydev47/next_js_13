//[...nextauth] means Dynamic next authentication the folder is named that since its the current best practice
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

import { connectToDB } from "@utils/database";

//declare the Handler

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            //check if the user exists

            //if the user doesnt exist, create it
            return true;
        } catch (error) {
            console.log(error);
            return true;
        }
    }
})
export { handler as GET, handler as POST }