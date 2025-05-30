const mongoose = require('mongoose');
require('dotenv').config();

/* este modulo conecta todo el proyecto backend a la base de datos MongoDB
esta diseñado para ser utilizado en el app y administrar todos los datos de la plataforma
este modulo es el encargado de conectar la base de datos MongoDB a la aplicacion
cualquier error en la conexión a la base de Datos debe revisarse aqui. */

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB connected successfully"))
        .catch(err => console.error("MongoDB connection error:", err));
};
module.exports = connectDB;

//a la hora de hacer deploy, hay que reconfigurar la variable de entorno MONGODB_URI
// para que apunte a la base de datos de produccion