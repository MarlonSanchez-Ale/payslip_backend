const Recibo = require('../../db/models/Recibo')

const getAllRecibo = async () => {
    const Recibos = await Recibo.findAll();
    return Recibos;
}

module.exports = {
    getAllRecibo,
}