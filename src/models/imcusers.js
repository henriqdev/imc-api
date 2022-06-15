'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImcUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ImcUsers.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.DECIMAL(14, 2),
    weight: DataTypes.DECIMAL(14, 2)
  }, {
    sequelize,
    modelName: 'ImcUsers',
  });
  return ImcUsers;
};