const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(
      "User",
      {
         id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
         },
         email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
         },
         password: {
            type: DataTypes.STRING(64),
            validate: {
               is: "/^[0-9a-f]{64}$/i"
            },
         }
      },
     { timestamps: false }
      );
};

