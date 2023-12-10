const ProductorRepository = require('../Repositories/ProductorRepository')

const getAllProductor = async () => {
    const productores = await ProductorRepository.getAllProductor();

    if (!productores) {
        throw new Error('No se ha encontrado la lista de productores.')
    }

    return productores
}

module.exports = {
    getAllProductor
}