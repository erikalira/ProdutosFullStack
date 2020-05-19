'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id_categoria: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {});
  Produto.associate = function(models) {
    // associations can be defined here
  };
  return Produto;
};