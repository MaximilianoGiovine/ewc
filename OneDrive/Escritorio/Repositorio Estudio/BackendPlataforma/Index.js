const app = require('./src/server');
const connectDB = require('./src/config/dbcon');

const PORT = process.env.PORT || 3000;

/*
    este es el entry point del backend
    index se encarga de iniciar el servidor, hacer la conexion con la base de datos y que todo funcione
    cualquier error en la conexion a la base de datos debe revisarse aqui.
    si el error de conexión no está aqui, buscar en dbcon.js
    este modulo es el encargado de conectar la base de datos MongoDB a la aplicacion
    cualquier error en solicitudes HTTP debe revisarse en App.js o dentro de las rutas.
    si en las rutas no se encuentra el error, buscar en los controladores
    si en los controladores no se encuentra el error, buscar en los servicios
    si en los servicios no se encuentra el error, buscar en los modelos
    si en los modelos no se encuentra el error, buscar en los esquemas
*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
        .then(() => console.log("Database connected successfully"))
        .catch(err => console.error("Database connection error:", err));
});