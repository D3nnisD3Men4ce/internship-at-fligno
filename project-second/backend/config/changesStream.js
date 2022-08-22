import { MongoClient } from "mongodb";
import mockData from "../../frontend/src/mockDataSimulation/mockData";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:jkpb5299@plantdata.nmarun4.mongodb.net/test";

const client = new MongoClient(uri);

const simulateAsyncPause = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });

let changeStream;
async function run() {
  try {
    const database = client.db("test");
    const collection = database.collection("plantdatas");

    const options = { fullDocument: "updateLookup" };
    const pipeline = [
        {
            '$match': {
                'operationType': 'insert',
            }
        }
    ];

    // open a Change Stream on the "haikus" collection
    changeStream = collection.watch();

    // set up a listener when change events are emitted
    changeStream.on("change", next => {
      // process any change event
      console.log("received a change to the collection: \t", next);
    });

    await simulateAsyncPause();
    await collection.insertOne({
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    });
    await simulateAsyncPause();

    await changeStream.close();
    
    console.log("closed the change stream");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
