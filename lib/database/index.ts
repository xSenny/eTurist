const MONGODB_URL = process.env.MONGODB_URI

let cachedDb = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
    if (cachedDb.conn) {
        return cachedDb.conn
    }
    if (!MONGODB_URL) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        )
    }
    cachedDb.promise = cachedDb.promise || require("mongoose").connect(MONGODB_URL, {
        dbName: "eturist",
        bufferCommands: false,
    })

    cachedDb.conn = await cachedDb.promise
    return cachedDb.conn
}