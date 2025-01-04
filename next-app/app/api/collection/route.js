import { DataAPIClient } from "@datastax/astra-db-ts";

export async function GET(request) {
    const client = new DataAPIClient('AstraCS:ISwiZRYJtRrWAWkBbFBggoEi:e0eec7ebc2cef0e227fbcf194bfecc7c0457378d0fc4f76fc32903c1db089017');
    const db = client.db('https://e5612a6b-17c8-4bb4-b0a2-57c46cdb6ffd-us-east1.apps.astra.datastax.com');

    try {
        // Replace 'posts' with the name of your collection
        const collectionName = "posts";
        const collection = db.collection(collectionName);

        // Use the 'find' method to retrieve all documents
        const cursor = collection.find({});
        const documents = await cursor.toArray(); // Convert the cursor to an array of documents
        console.log(documents)
        // Return the documents as JSON
        return new Response(JSON.stringify({ data: documents }), { status: 200 });
    } catch (error) {
        console.error("Error fetching documents:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}