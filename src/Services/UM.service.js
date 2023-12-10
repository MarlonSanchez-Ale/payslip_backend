const UMRepository = require('../Repositories/UMRepository');

const getAllUM = async () =>  {
    const UM = await UMRepository.getAllUM();

    if (!UM) {
        throw new Error('Unidades de medida no encontradas');
    }

    return UM;
}


module.exports = {
    getAllUM
}