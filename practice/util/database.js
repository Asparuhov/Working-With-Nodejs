const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Chris:Krisi0143171864a@cluster0.d3hu6.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log(`connected`);
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;