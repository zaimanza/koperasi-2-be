const { MongoClient } = require("mongodb");
require("dotenv").config();

var db;
var assetsModel;
var client;

exports.connectDB = async () => {
  try {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db(process.env.MONGO_DATABASE_NAME);
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};
exports.Parcel = async () => await db.collection("parcel");
