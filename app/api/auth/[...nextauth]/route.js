//[...nextauth] means Dynamic next authentication the folder is named that since its the current best practice
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

//declare the Handler

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})
export { handler as GET, handler as POST }