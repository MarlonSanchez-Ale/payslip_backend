const Finca = require('../../db/models/Finca');

const getAllFinca = async () => {
    const fincas = Finca.findAll();
    return fincas;
}

module.exports = {
    getAllFinca
}