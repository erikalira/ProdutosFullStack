'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id_categoria: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {freezeTableName: true});
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.belongsTo(models.Categoria, {
    	foreignKey:'id_categoria',
    	as: 'categorias'
    });
  };
  return Produto;
};