const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tbl = 'Users';

const Users = sequelize.define('Users', {
  
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
 
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
 
}, {  tbl, timestamps:false, freezeTableName:true });


module.exports = Users;
