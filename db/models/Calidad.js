const { DataTypes } = require('sequelize')
const sequelize = require('../connection/sequelize')

const Calidad = sequelize.define('Calidad', {
    idcalidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigoCalidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calidad: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    tableName: 'Calidad'
})

module.exports = Calidad