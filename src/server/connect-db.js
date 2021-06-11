import { MongoClient } from 'mongodb';
const url = "mongodb+srv://admin:admin2@cluster0.5boba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db = null;

export async function connectDB(){
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.log(db)
    return db;
}