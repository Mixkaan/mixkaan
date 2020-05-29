//-----BASE-DE-DATOS-PRODUCCION-----//
const mongoose = require('mongoose');
mongoose.connect('mongodb://unico-reptiles:unico123@ds231758.mlab.com:31758/heroku_5df7bcgr', {
  useNewUrlParser: true
});

/* //-----BASE-DE-DATOS-DESARROLLO-----//
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unico', {
  useNewUrlParser: true
})

  .then(db => console.log('Base de datos conectada'))
  .catch(err => console.log(err)); */