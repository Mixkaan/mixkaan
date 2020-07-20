const {Schema, model} = require('mongoose');

const productoSchema = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    categoria: {type: String},
    
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: Date.now()},
})

module.exports = model('Producto', productoSchema);