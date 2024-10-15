import mongoose from "mongoose"
export default async function connection() {
    const db=mongoose.connect(process.env.DB_NAME+process.env.DB_URL)
    return db
    
}