'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Produto', 
      [
        {
        id_categoria: 1,
        descricao: 'notebook i7',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id_categoria: 2,
        descricao: 'Aprendendo JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('Produto', null, {});
  }
};
