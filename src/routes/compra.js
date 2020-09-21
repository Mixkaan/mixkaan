const { Router } = require('express');
const router = Router()
//modelos
const Animal = require('../models/Animal');
const Producto = require('../models/Producto');

//ELIMINAR-DESPUES-DE-LA-COMPRA--------------------//
router.get('null', async(req, res) => {
  const {id} = req.params;
  const animal = await Animal.findByIdAndDelete(id);
  await unlink(path.resolve('./src/public' + animal.path));
  const producto = await Producto.findByIdAndDelete(id);
  await unlink(path.resolve('./src/public' + producto.path));
  res.render('/');
});



module.exports = router;