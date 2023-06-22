import mongoose from "mongoose";

let isConnected = false;//track connection established

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is connected')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected =  true;

        console.log("MONGODB is connected")
    } catch (error) {
        console.log(error)
    }
} 