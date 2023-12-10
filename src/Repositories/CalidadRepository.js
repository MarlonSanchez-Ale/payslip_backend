const Calidad = require('../../db/models/Calidad')

const getAllCalidad = async () => {
    const calidad = await Calidad.findAll();
    return calidad
}

module.exports = {
    getAllCalidad
}