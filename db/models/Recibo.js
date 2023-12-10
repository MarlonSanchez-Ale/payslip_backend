const { DataTypes } = require('sequelize')
const sequelize = require('../connection/sequelize')
const Productor = require('./Productor')
const Finca = require('./Finca')
const Calidad = require('./Calidad')
const Cosecha = require('./Cosecha')

const Recibo = sequelize.define('Recibo', {
    IdRecibo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CodigoRecibo: {
        type: DataTypes.INTEGER(50),
        allowNull: false
    },
    FechaRecibo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cantidadSacos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PesoBruto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Tara: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    PesoNeto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'Recibo'
})

// Relacionando el productor con el recibo 
Recibo.hasOne(Productor, { foreignKey: 'IdProductor' })
Productor.belongsTo(Recibo, { foreignKey: 'IdProductor' })

// Relacionando la finca con el recibo
Recibo.hasOne(Finca, { foreignKey: 'IdFinca' })
Finca.belongsTo(Recibo, { foreignKey: 'IdFinca' })

//Relacionando la calidad con el recibo
Recibo.hasOne(Calidad, { foreignKey: 'IdCalidad' })
Calidad.belongsTo(Recibo, { foreignKey: 'IdCalidad' })

// Relacionando la cosecha con el recibo
Recibo.hasOne(Cosecha, { foreignKey: 'IdCosecha' })
Cosecha.belongsTo(Recibo, { foreignKey: 'IdCosecha' })

module.exports = Recibo;