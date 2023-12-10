const UMService = require('../Services/UM.service')

const getAllUM = async (req, res) => {
    try {
        const UM = await UMService.getAllUM();
        res.status(200).json(UM);
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al obtener la lista de unidades de medida')
    }
}

module.exports = {
    getAllUM,
}