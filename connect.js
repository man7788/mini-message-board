const { MongoClient } = require("mongodb");
require("dotenv").config();

// Replace the following with your Atlas connection string
const url = process.env.MONGO_URL;
const client = new MongoClient(url);

// Reference the database to use
const dbName = "message_board";

async function run() {
  try {
    // Connect to the Atlas cluster
    await client.connect();
    const db = client.db(dbName);

    // Reference the "people" collection in the specified database
    const col = db.collection("messages");

    // Find and return the document
    const filter = { user: "MongoDB" };
    const document = await col.findOne(filter);

    return document;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

module.exports = run;
