const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define(
      "User",
      {
         // id: {
         //    type: DataTypes.INTEGER,
         //    allowNull: false,
         //    autoIncrement: true,
         //    primaryKey: true,
         // },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
         },
         password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            // validate: {
            //    is: "/^[0-9a-f]{64}$/i"
            // },
         }
      },
     { timestamps: false }
      );
};

