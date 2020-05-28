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
          categoria: 'Eletronicos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoria: 'Livros',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoria: 'Brinquedos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoria: 'Alimentos',
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
