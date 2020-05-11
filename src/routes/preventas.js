const { Router } = require('express');
const router = Router()

const Preventa = require('../models/Preventa');

//TODOS-DISPONIBLES
router.get('/preventas', async(req, res) => {
  const preventas = await Preventa.find();
  res.render('preventas', {preventas});
});

module.exports = router;