'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    categoria: DataTypes.STRING
  }, {freezeTableName: true});
  Categoria.associate = function(models) {
    // associations can be defined here
    Categoria.hasMany(models.Produto, {
    	foreignKey: 'id_categoria',
      as: 'produtos'
    });
  };
  return Categoria;
};