var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controllerProduto');

/* GET users listing. */
router.post('/', controllers.createProduct);
router.get('/', controllers.getAllProducts);
router.get('/:productsId', controllers.getProductById);
router.put('/:productsId', controllers.updateProduct);
router.delete('/:productsId', controllers.deleteProduct);

module.exports = router;
