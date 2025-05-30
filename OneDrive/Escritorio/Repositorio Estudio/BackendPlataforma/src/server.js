const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

/*
server se encarga de conectar con la librería de express y configurar las demas librerías que utiliza el proyecto con el backend
el propósito es modularizar el código de arranque de la aplicación
*/
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Connect to MongoDB

module.exports = app;
// app se exporta al Index.js para ser utilizado en el arranque de la aplicación