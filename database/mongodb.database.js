const { MongoClient } = require("mongodb");
require("dotenv").config();

var db;
var assetsModel;
var client;

exports.connectDB = async () => {
  try {
    client = new MongoClient(
      "mongodb+srv://aiman:S!mple01@cluster0.pkfhk.gcp.mongodb.net/?retryWrites=true&w=majority"
    );
    await client.connect();
    db = client.db("koperasi_db");
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};
exports.Parcel = async () => await db.collection("parcel");
exports.User = async () => await db.collection("user");
