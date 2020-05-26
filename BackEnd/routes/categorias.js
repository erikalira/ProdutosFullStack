var express = require('express');
var router = express.Router();
const models = require('../app/models');

router.get('/', async (req, res) => {
	try {
		const categorias = await models.Categoria.findAll();
		return res.status(200).json({ categorias });
		} catch (error) {
		return res.status(500).send(error.message);
		}
	}

);

module.exports = router;