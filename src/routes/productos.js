const { Router } = require('express');
const router = Router()
const {unlink} = require('fs-extra');
const path = require('path');

const Producto = require('../models/Producto');


//TODOS-DISPONIBLES
router.get('/productos', async(req, res) => {
  const alimentos = await Producto.find({seccion: "alimento"});
  const suplementos = await Producto.find({seccion: "suplemento"});
  const decoraciones = await Producto.find({seccion: "decoracion"});
  const mantenimientos = await Producto.find({seccion: "mantenimiento"});
  res.render('productos/productos', {
    alimentos,suplementos,decoraciones,mantenimientos});
});


router.get('/info_producto/:id', async(req, res) => {
  const {id} = req.params;
  const producto = await Producto.findById(id);
  res.render('productos/info_producto', {producto});
});

//STRIPE
const stripe = require('stripe')('sk_test_fu8TvMKyKO8k1PPajqhOezsV00bgGfrfC5');

router.post('/compra/:id', async(req, res) => {

  const {id} = req.params;
  const producto = await Producto.findById(id);

  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: producto.precio*100,
    currency: 'mxn',
    customer: customer.id,
    description: producto.descripcion
  })
  console.log(charge.id)
  res.redirect('/animal/hecho/'+producto.id);
});

// FINALIZAR COMPRA -------------------- //
router.get('/animal/hecho/:id', async(req, res) => {
  const {id} = req.params;
  const producto = await Producto.findByIdAndDelete(id);
  await unlink(path.resolve('./src/public' + producto.path));
  res.render('compra/hecho');
});

router.get('/animal/hecho', async(req, res) => {
  // const {id} = req.params;
  // const producto = await Producto.findByIdAndDelete(id);
  // await unlink(path.resolve('./src/public' + producto.path));
  res.render('compra/hecho');
});

module.exports = router;