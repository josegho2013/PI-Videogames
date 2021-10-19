const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define("platform", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
