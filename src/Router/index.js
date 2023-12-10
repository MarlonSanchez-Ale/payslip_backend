const { Router } = require('express')
const router = Router();
const CalidadRoutes = require('./Routers/calidad.routes')
const CosechaRoutes = require('./Routers/Cosecha.routes')
const UMRoutes = require('./Routers/UM.routes')
const ProductorRoutes = require('./Routers/Productor.routes');
const FincaRoutes = require('./Routers/Fincas.routes')
const ReciboRoutes = require('./Routers/Recibo.routes')

const { route } = require('..');
const url_base = '/api'

router.use(`${url_base}/calidad`, CalidadRoutes)
router.use(`${url_base}/cosecha`, CosechaRoutes)
router.use(`${url_base}/UnidadMedida`, UMRoutes)
router.use(`${url_base}/productor`, ProductorRoutes)
router.use(`${url_base}/finca`, FincaRoutes)
router.use(`${url_base}/recibo`, ReciboRoutes)

module.exports = router;