var express = require('express');
var router = express.Router();

//  Contactos
const contactos =[
  {
    nombre: 'Heinner',
    numero: '131231'
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs',{contactos});
});

/* GET home form page. */
router.get('/form', function(req, res, next) {
  res.render('form');
});

/* POST home form page. */
router.post('/addcontact', function(req, res,){
  contactos.push(req.body)
  res.redirect('/');
})


module.exports = router;
