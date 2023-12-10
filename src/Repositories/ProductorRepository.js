const Productor = require('../../db/models/Productor');

const getAllProductor = async () => {
    const productores = await Productor.findAll();
    return productores;
}

module.exports = {
    getAllProductor,
}