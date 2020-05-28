const models = require('../app/models');

const createProduct = async (req, res) => {
  try {
    const products = await models.Produto.create(req.body);
    return res.status(201).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllProducts = async (req, res) => {
	try {
	const products = await models.Produto.findAll(
		{
		  include: [
		    {
		      model: models.Categoria,
		      as: 'categorias'
		    }
		  ]
		}
	);
	return res.status(200).json({ products });
	} catch (error) {
	return res.status(500).send(error.message);
	}
}

const getProductById = async (req, res) => {
  try {
    const { productsId } = req.params;
    const products = await models.Produto.findOne({
      where: { id: productsId },
      include: [
        {
          model: models.Categoria,
          as: 'categorias'
        }
      ]
    });
    if (products) {
      return res.status(200).json({ products });
    }
    return res.status(404).send('Produto with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateProduct = async (req, res) => {
  try {
    const { productsId } = req.params;
    const [ updated ] = await models.Produto.update(req.body, {
      where: { id: productsId },
      include: [
        {
          model: models.Categoria,
          as: 'categorias'
        }
      ]
    });
    if (updated) {
      const updatedProduto = await models.Produto.findOne({ where: { id: productsId },
        include: [
          {
            model: models.Categoria,
            as: 'categorias'
          }
        ]
      });
      return res.status(200).json({ products: updatedProduto });
    }
    throw new Error('Produto não foi encontrado!');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productsId } = req.params;
    const deleted = await models.Produto.destroy({
      where: { id: productsId }
    });
    if (deleted) {
      return res.status(204).send("Produto deleted");
    }
    throw new Error("Produto not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
	createProduct,
 	getAllProducts,
 	getProductById,
 	updateProduct,
 	deleteProduct
}