var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.render('index', { title: 'Comisión 21' });
});

router.get('/about', (req,res) => res.render('about'))

module.exports = router;
