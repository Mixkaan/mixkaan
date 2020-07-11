const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');

const { v4: uuidv4 } = require('uuid');
uuidv4();



//INICIALIZACION
const app = express();
require('./database');

//CONFIGS
app.set('port', process.env.PORT || 7000);
app.set('views', path.join(__dirname, 'views'));
//CONFOG CARPETAS DENTRO DE VIEWS

//MEDIA
app.set('media', path.join(__dirname, 'views/media'));
app.set('view engine', 'pug');
//DISPONIBLE
app.set('disponible', path.join(__dirname, 'views/disponible'));
app.set('view engine', 'pug');

//SASS-MIDDLEWARE
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentSyntax: true,
  sourceMap: true
}));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname,'public/img/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});
app.use(multer({
  storage
}).single('imagen'));



//RUTAS
app.use(require('./routes/inicio'));
app.use(require('./routes/media'));
app.use(require('./routes/disponibles'));
//app.use(require('./routes/preventas'));
//app.use(require('./routes/contactanos'));

app.use(require('./routes/compra'));

app.use(require('./routes/login'));
app.use(require('./routes/admin'));

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
  console.log('Iniciando servidor en el puerto', app.get('port'));
});