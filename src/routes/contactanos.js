const { Router } = require('express');
const router = Router()

//CONTACTANOS
router.get('/contactanos', (req, res) => {
  res.render('contactanos')
});

module.exports = router;