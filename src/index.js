require('dotenv').config();
const express = require('express')
const Routers = require('./Router/index.js')
const bodyParser = require('body-parser');
const sequelize = require('../db/connection/sequelize.js')
const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

const app = express();

// use cors true
app.use(cors(corsOptions))

const morgan = require('morgan');

// Configuracion

app.set('port', process.env.PORT)
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.json())

//Routes 
app.use(Routers)

// Iniciando el servidor
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
});

module.exports = app;

