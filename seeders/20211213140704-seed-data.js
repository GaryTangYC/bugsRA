module.exports = {
  up: async (queryInterface, Sequelize) => {
    const featureData = [
      {
        name: 'navbar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'sidebar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'icon',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('features', featureData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
