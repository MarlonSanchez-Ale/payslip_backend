// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');

const Productor = sequelize.define('Productor', {
  IdProductor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigoProductor: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cedula: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Productor'
});

//Productor.sync(); // Esto creará la tabla en la base de datos si no existe

module.exports = Productor;
