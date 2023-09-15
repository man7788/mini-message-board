const { MongoClient } = require("mongodb");
require("dotenv").config();

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.mk3oruf.mongodb.net/?retryWrites=true&w=majority`;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

// run().catch(console.dir);

module.exports = run;
