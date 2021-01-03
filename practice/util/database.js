const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Chris:Krisi0143171864a@cluster0.d3hu6.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log(`connected`);
      db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw "no data found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
