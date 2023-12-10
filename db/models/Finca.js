const { DataTypes } = require('sequelize')
const sequelize = require('../connection/sequelize')
const Productor = require('./Productor')

const Finca = sequelize.define('Finca', {
    IdFinca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigoFinca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Finca: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
}, {
    tableName: 'Finca'
})

// Establecer relacion de uno a muchos (Un productor puede tener varias fincas)
Productor.hasMany(Finca, { foreignKey: 'IdProductor' });
Finca.belongsTo(Productor, { foreignKey: 'IdProductor' });


module.exports = Finca;