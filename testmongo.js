const { MongoClient } = require("mongodb");

// The uri string must be the connection string for the database (obtained on Atlas).
const uri = "mongodb+srv://brennononeill:CMPS415@bomdb.g5uygmr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('bomdb');
    const parts = database.collection('cmps415');

    // Query for a part that has partID '1072'
    const query = { partID: '1072' };
    const part = await parts.findOne(query);

    console.log(part);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
