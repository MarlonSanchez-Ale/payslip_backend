const CosechaRepository = require('../Repositories/CosechaRepository')

const getAllCosecha = async () => {
    const cosecha = await CosechaRepository.getAllCosecha();

    if(!cosecha) {
        throw new Error('Cosechas no encontradas')
    }
    return cosecha
}

module.exports = {
    getAllCosecha
}