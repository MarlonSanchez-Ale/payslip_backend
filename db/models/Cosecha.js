const { DataTypes } = require('sequelize')
const sequelize = require('../connection/sequelize')

const Cosecha = sequelize.define('Cosecha', {
    IdCosecha:  {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigoCosecha: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Periodo: {
        type: DataTypes.STRING(50),
        allowNull:  false
    },
    año: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'Cosecha'
})

module.exports = Cosecha;