const { Router } = require('express');
const router = Router()

const Animal = require('../models/Animal');



//SELECIONAR-ANIMAL-&-REDIRECIONAR-A-MAS-INFORMACION
router.get('/comprar/:id', async(req, res) => {
  const {id} = req.params;
  const animal = await Animal.findById(id);
  res.render('comprar', {animal});

});

module.exports = router;