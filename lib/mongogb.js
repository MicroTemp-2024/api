import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        {/* Connect By $MONGODB_URI in .evn file */}
        await mongoose.connect(process.env.MONGODB_URI);
        {/* for success */}
        console.log("MongoDB connected");
    } catch (error) {
        {/* for error */}
        console.log(error);
    }
}

// import mongoose from "mongoose";