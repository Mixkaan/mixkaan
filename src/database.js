const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://unico-reptiles:unico-reptiles@cluster0-qb2n1.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://unico-reptiles:unico-reptiles@cluster0-qb2n1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
  