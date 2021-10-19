const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define("genre", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

