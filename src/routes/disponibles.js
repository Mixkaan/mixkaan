const { Router } = require('express');
const router = Router()

const Animal = require('../models/Animal');

//TODOS-DISPONIBLES
router.get('/disponible', async(req, res) => {
  const animales = await Animal.find();
  res.render('disponible/disponible', {animales});
});


//DISPONIBLES-LAGARTOS
router.get('/lagartos', async(req, res) => {
  const animales = await Animal.find({seccion:"lagartos"});
  res.render('disp_lagartos', {animales});
});


//DISPONIBLES-SERPIENTES
router.get('/serpientes', async(req, res) => {
  const animales = await Animal.find({seccion:"serpientes"});
  res.render('disp_serpientes', {animales});
});


//DISPONIBLES-TORTUGAS
router.get('/tortugas', async(req, res) => {
  const animales = await Animal.find({seccion:"tortugas"});
  res.render('disp_tortugas', {animales});
});



//SELECIONAR-ANIMAL-&-REDIRECIONAR-A-MAS-INFORMACION
router.get('/animal-info/:id', async(req, res) => {
  const {id} = req.params;
  const animal = await Animal.findById(id);
  res.render('animal-info', {animal});
});



module.exports = router;