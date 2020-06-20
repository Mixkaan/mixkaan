const { Router } = require('express');
const router = Router()

//INICIO-PAGINA-PRINCIPAL
router.get('/media', (req, res) => {
  res.render('media')
});



module.exports = router;