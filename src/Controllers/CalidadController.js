const CalidadService = require('../Services/CalidadService')

const getAllCalidad = async (req, res) => {
    try {
        const calidades = await CalidadService.getAllCalidad()
        res.status(200).json(calidades)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener la lista de calidades')
    }
}

module.exports = {
    getAllCalidad
}