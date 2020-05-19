const models = require('../app/models');

const getProducts = async (req, res) => {
	try {
	const produtos = await models.Produto.findAll(
		{
		  include: [
		    {
		      model: models.Categoria,
		      as: 'categorias'
		    }
		  ]
		}
	);
	return res.status(200).json({ produtos });
	} catch (error) {
	return res.status(500).send(error.message);
	}
}

module.exports = {
  getProducts
}