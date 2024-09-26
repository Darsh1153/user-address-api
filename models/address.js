const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Address = sequelize.define('Address', {
  addressLine: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Set up the one-to-many relationship
User.hasMany(Address, { onDelete: 'CASCADE' });
Address.belongsTo(User);

module.exports = Address;