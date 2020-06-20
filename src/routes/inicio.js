const { Router } = require('express');
const router = Router()

//INICIO-PAGINA-PRINCIPAL
router.get('/', (req, res) => {
  res.render('index')
});



module.exports = router;