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

module.exports = router;