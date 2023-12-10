const ReciboService = require('../Services/Recibo.service');

const getAllRecibo = async (req, res) => {
    try {
        const recibos = await ReciboService.getAllRecibo()
        res.status(200).json(recibos)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    getAllRecibo
}