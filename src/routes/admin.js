const { Router } = require('express');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');


const Preventa = require('../models/Preventa');
const Animal = require('../models/Animal');



//PAGINA-ADMINISTRADOR--(ANIMALES-&-PREVENTAS)
router.get('/admin', (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login')
}, async(req, res) => {
  const preventas = await Preventa.find();
  const animales = await Animal.find();
  res.render('admin', {preventas, animales});
});



//SUBIR-ANIMAL--------------------//
router.get('/subir_animal', (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login')
}, (req, res) => {
  res.render('subir_animal')
});

//SUBIR-PREVENTA--------------------//
router.get('/subir_preventa', (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login')
}, (req, res) => {
  res.render('subir_preventa')
});



//PROCESO-DE-SUBIDA/ANIMAL-------------------//
router.post('/subir_animal', async(req, res) => {
  const animal = new Animal();
  animal.nombre =req.body.nombre;
  animal.descripcion =req.body.descripcion;
  animal.fases =req.body.fases;
  animal.precio =req.body.precio;
  animal.sexo =req.body.sexo;
  animal.edad =req.body.edad;
  animal.seccion =req.body.seccion;
  animal.subseccion =req.body.subseccion;

  animal.filename =req.file.filename;
  animal.path = '/img/uploads/' + req.file.filename;
  animal.originalname =req.file.originalname;
  animal.mimetype =req.file.mimetype;
  animal.size =req.file.size;

  await animal.save();
  res.redirect('/admin');
});

//PROCESO-DE-SUBIDA/PREVENTA--------------------//
router.post('/subir_preventa', async(req, res) => {
  const preventa = new Preventa();
  preventa.nombre =req.body.nombre;
  preventa.descripcion =req.body.descripcion;
  preventa.fases =req.body.fases;
  preventa.precio =req.body.precio;
  preventa.seccion =req.body.seccion;
  preventa.subseccion =req.body.subseccion;

  preventa.filename =req.file.filename;
  preventa.path = '/img/uploads/' + req.file.filename;
  preventa.originalname =req.file.originalname;
  preventa.mimetype =req.file.mimetype;
  preventa.size =req.file.size;

  await preventa.save();
  res.redirect('/admin');
});



//ELIMINAR-ANIMAL--------------------//
router.get('/animal/:id/eliminar', async(req, res) => {
  const {id} = req.params;
  const animal = await Animal.findByIdAndDelete(id);
  await unlink(path.resolve('./src/public' + animal.path));
  res.redirect('/admin');
});

//ELIMINAR-PREVENTA--------------------//
router.get('/preventa/:id/eliminar', async(req, res) => {
  const {id} = req.params;
  const preventa = await Preventa.findByIdAndDelete(id);
  await unlink(path.resolve('./src/public' + preventa.path));
  res.redirect('/admin');
});

module.exports = router;



//ESTA-FUNCION-PERMITE-ENTRAR-A-LAS-DIRECCIONES-SOLO-SI-HAZ-INICIADO-SESION//
/* (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login')
} */