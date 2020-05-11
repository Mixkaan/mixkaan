const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://unico-reptiles:unico-reptiles@cluster0-qb2n1.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));