const ReciboRepository = require('../Repositories/ReciboRepository');

const getAllRecibo = async () => {
    const recibos = await ReciboRepository.getAllRecibo();
    if (!recibos) {
        throw new Error('Error al mostrar los recibos')
    }

    return recibos;
}

module.exports = {
    getAllRecibo
}