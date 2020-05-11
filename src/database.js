const mongoose = require('mongoose');
const uri = 'mongodb+srv://unico-reptiles:<password>@unico-qb2n1.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true
})

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err));