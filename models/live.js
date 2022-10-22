'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Live extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Live.hasMany(models.Live_section)
    }
  }
  Live.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title_img: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Live',
  });
  return Live;
};