const { registerUser, loginUser } = require("../services/authService");

/*
    Este es el controlador de autenticación que maneja las solicitudes de registro e inicio de sesión de usuarios.
    Contiene dos funciones: register y login, que se encargan de registrar nuevos usuarios y autenticar a los usuarios existentes.
    El controlador utiliza los servicios de authService para realizar las operaciones de registro e inicio de sesión.
    Cualquier problema con vulnerabilidad de credenciales, o con usuarios duplicados, revisar aqui.
    si el problema persiste, revisar en los servicios de authService.
    si ahi no esta el problema, revisar en el modelo de usuario.
*/

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await registerUser(username, password);
    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
    Esta es la función de inicio de sesión de usuario que se utiliza para autenticar a los usuarios.
    Toma un nombre de usuario y una contraseña, verifica si el usuario existe,
    compara la contraseña proporcionada con la almacenada en la base de datos y devuelve el usuario autenticado.
    El servicio utiliza el modelo User para interactuar con la base de datos y bcryptjs para comparar las contraseñas.
    cualquier problema con vulnerabilidad de credenciales, o con usuarios duplicados, revisar aqui.
    si el problema persiste, revisar en los servicios de authService.
    si ahi no esta el problema, revisar en el modelo de usuario.
*/

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password);
    res.json({ message: "Login exitoso", user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, login };