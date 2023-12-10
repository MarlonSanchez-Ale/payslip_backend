const ProductorController = require('../Services/Productor.service')

const getAllProductor = async (req, res) => {
    try {
        const productores = await ProductorController.getAllProductor();
        res.status(200).json(productores)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener la lista de productores')
    }
}

module.exports = {
    getAllProductor
}