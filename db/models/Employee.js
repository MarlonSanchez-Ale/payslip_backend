const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');

const Employee = sequelize.define('Employees', {
    idEmployee: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    tableName: 'Employee'
  });
  
  //Employees.sync(); // Esto creará la tabla en la base de datos si no existe
  
  module.exports = Employee;