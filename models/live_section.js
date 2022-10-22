'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Live_section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Live_section.belongsTo(models.Live)
    }
  }
  Live_section.init({
    LiveId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Live_section',
  });
  return Live_section;
};