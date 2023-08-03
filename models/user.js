const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
    email:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    phone:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    }
});

module.exports=User;