const FincaService = require('../Services/Finca.service')

const getAllFinca = async (req, res) => {
    try {
        const fincas = await FincaService.getAllFinca();
        res.status(200).json(fincas)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener la lista de fincas')
    }
}

module.exports = {
    getAllFinca
}