
const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');

const UnidadMedida = sequelize.define('UnidadMedida', {
    IdUnidadMedida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigoUnidadMedida: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nombreCorto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'UnidadMedida'
})

module.exports = UnidadMedida;
