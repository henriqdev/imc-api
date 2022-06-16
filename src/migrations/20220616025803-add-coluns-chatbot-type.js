'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'ChatBotStatics',
        'typeInput',
        {
          type: Sequelize.ENUM,
          values: ['TEXT', 'CHECK', 'NUMBER'],
          defaultValue: 'TEXT'
        },
        { transaction }
      );

      await queryInterface.changeColumn('ChatBotStatics', 'keywords', {
        type: Sequelize.TEXT,
      },{ transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('ChatBotStatics', 'typeInput', { transaction })
      await queryInterface.changeColumn('ChatBotStatics', 'keywords', {
        type: Sequelize.STRING,
      },{ transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
