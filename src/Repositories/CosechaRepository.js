const Cosecha = require('../../db/models/Cosecha')

const getAllCosecha = async () => {
    const cosecha = await Cosecha.findAll();
    return cosecha;
}

module.exports = {
    getAllCosecha
}