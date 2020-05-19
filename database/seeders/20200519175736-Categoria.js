'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Categoria', 
      [
        {
          categoria: 'Eletronico',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoria: 'Livros',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('Categoria', null, {});
  }
};
