const CalidadRepository = require('../Repositories/CalidadRepository')

const getAllCalidad = async () => {
    const calidad = await CalidadRepository.getAllCalidad()

    if (!calidad) {
        throw new Error('Calidad no encontrada')
    }

    return calidad
}

module.exports = {
    getAllCalidad
}