const { all } = require('axios');
const { DataTypes, INTEGER } = require('sequelize');

//LOS MODELOS SE DECLARAN CON MAYUSCULA
module.exports = (database) => {
   database.define(
     "Favorite",
     //sequelize por defecto crea la columna id
     {
       id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         allowNull: false,
       },
       species: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknown"),
         allowNull: false,
       },
       origin: {
         type: DataTypes.JSON, //STRING //p/poder almacenar objetos dentro de una tabla el tipo de dato debe dser JSON
         allowNull: false,
       },
       image: {
         type: DataTypes.STRING,
         allowNull: false,
       }
     },
     { timestamps: false }
   );
};
