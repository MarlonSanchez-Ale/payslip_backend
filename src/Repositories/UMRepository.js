const UnidadMedida = require('../../db/models/UnidadMedida')

const getAllUM = async () => {
    const UnidadesM = await UnidadMedida.findAll();
    return UnidadesM;
}

module.exports = {
    getAllUM
}
