const CosechaService = require('../Services/Cosecha.service')

const getAllCosecha = async (req, res) => {
    try {
        const cosecha = await CosechaService.getAllCosecha()
        res.status(200).json(cosecha)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener la lista de cosecha')
    }
}

module.exports = {
    getAllCosecha
}