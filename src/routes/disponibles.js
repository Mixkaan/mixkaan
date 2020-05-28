const { Router } = require('express');
const router = Router()

const Animal = require('../models/Animal');

//TODOS-DISPONIBLES
router.get('/todos_ejemplares', async(req, res) => {
  const animales = await Animal.find();
  res.render('disp_todos.pug', {animales});
});


//DISPONIBLES-LAGARTOS
router.get('/lagartos', async(req, res) => {
  const animales = await Animal.find({seccion:"lagartos"});
  res.render('disp_lagartos', {animales});
});


//-----DISPONIBLES-SERPIENTES
router.get('/serpientes', async(req, res) => {
  const animales = await Animal.find({seccion:"serpientes"});
  res.render('disp_serpientes', {animales});
});

//SUB-SECCIONES-SERPIENTES//

//-----PITONES
router.get('/serpientes/pitones', async(req, res) => {
  const animales = await Animal.find({seccion:"serpientes", subseccion:"pitones"});
  res.render('disp_pitones', {animales});
});
//-----BOAS
router.get('/serpientes/boas', async(req, res) => {
  const animales = await Animal.find({subseccion:"boas"});
  res.render('disp_boas', {animales});
});
//-----COLUBRIDOS
router.get('/serpientes/colubridos', async(req, res) => {
  const animales = await Animal.find({subseccion:"colubridos"});
  res.render('disp_colubridos', {animales});
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