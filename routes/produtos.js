var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllerProduto');

/* GET users listing. */
router.get('/', controllers.getProducts);

module.exports = router;
