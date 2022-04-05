var express = require('express');
var router = express.Router();

//  Contactos
const contactos =[
  {
    nombre: 'Heinner',
    numero: '131231'
  },
  {
    nombre: 'Javier',
    numero: '131231'
  },
  {
    nombre: 'Tom',
    numero: '131231'
  },
  {
    nombre: 'Duke',
    numero: '134331'
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs',{contactos});
});

module.exports = router;
