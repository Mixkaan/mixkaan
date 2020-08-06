const { Router } = require('express');
const router = Router()

const Producto = require('../models/Producto');

//TODOS-DISPONIBLES
router.get('/productos', async(req, res) => {
  const productos = await Producto.find();
  const alimentos = await Producto.find({seccion: "alimento"});
  const suplementos = await Producto.find({seccion: "suplementos"});
  const mantenimiento = await Producto.find({seccion: "mantenimiento"});
  const mas = await Producto.find({seccion: "mas"})
  res.render('productos/productos', {
    productos,alimentos, suplementos, mantenimiento, mas
  });
});

router.get('/productos/cucarachas', async(req, res) => {
  res.render('productos/cucarachas');
});

module.exports = router;