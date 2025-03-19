import { neon } from "@neondatabase/serverless";

const connectNeonDB = async () => {
    try {
        await neon(process.env.NEONDB_URI);
        console.log("Connected to NeonDB");
    }catch (error) {
        console.log("Error connecting to NeonDB:", error);
    }
}

export default connectNeonDB;