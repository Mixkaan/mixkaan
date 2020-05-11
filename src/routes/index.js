const { Router } = require('express');
const router = Router()

//INDEX-PAGINA-PRINCIPAL
router.get('/', (req, res) => {
  res.render('index')
});

//PAGINA-DISPONIBLE
router.get('/disponible', (req, res) => {
  res.render('disponible')
});



const Animal = require('../models/Animal');


//TODOS-DISPONIBLES
router.get('/todos_ejemplares', async(req, res) => {
  const animales = await Animal.find();
  res.render('disp_todos', {animales});
});

module.exports = router;