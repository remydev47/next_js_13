//[...nextauth] means Dynamic next authentication the folder is named that since its the current best practice
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

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
            
        } catch (error) {
            
        }
    }
})
export { handler as GET, handler as POST }