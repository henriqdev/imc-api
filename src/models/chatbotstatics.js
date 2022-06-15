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
    keywords: DataTypes.STRING,
    stepFlow: DataTypes.STRING(2),
    answerDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatBotStatics',
  });
  return ChatBotStatics;
};