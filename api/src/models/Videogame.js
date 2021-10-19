const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    released:{
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    short_screenshots:{
      type: DataTypes.STRING,
      allowNull: true
    }

  });


};
