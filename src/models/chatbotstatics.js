'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatBotStatics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ChatBotStatics.init({
    answerMain: DataTypes.STRING,
    keywords: DataTypes.TEXT, // mudar para TEXT
    stepFlow: DataTypes.STRING(2),
    typeInput: {
      type: DataTypes.ENUM,
      values: ['TEXT', 'CHECK', 'NUMBER'],
      defaultValue: 'TEXT'
    },
    answerDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatBotStatics',
  });
  return ChatBotStatics;
};