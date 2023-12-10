const FincaRepository = require('../Repositories/FincaRepository');

const getAllFinca = async () => {
    const fincas = await FincaRepository.getAllFinca();

    if (!fincas) {
        throw new Error('No se encontraron las fincas');
    }

    return fincas;
}

module.exports = {
    getAllFinca,
}