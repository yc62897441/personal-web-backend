'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project_section.belongsTo(models.Project)

    }
  }
  Project_section.init({
    ProjectId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project_section',
  });
  return Project_section;
};