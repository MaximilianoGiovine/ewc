const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");


/*
    Este es el servicio de registro de usuario que se utiliza para registrar nuevos usuarios en la base de datos.
    Contiene una función registerUser que toma un nombre de usuario y una contraseña, verifica si el usuario ya existe,
    encripta la contraseña y crea un nuevo usuario en la base de datos.
    El servicio utiliza el modelo User para interactuar con la base de datos y bcryptjs para encriptar las contraseñas.
    cualquier problema con vulnerabilidad de credenciales, o con usuarios duplicados, revisar aqui.
*/
const registerUser = async (username, password) => {
  // Verificar si el usuario ya existe
  const existingUser = await User.findOne({ username });
  if (existingUser) throw new Error("El usuario ya está registrado");

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear nuevo usuario en la BD
  const user = new User({ username, password: hashedPassword });
  await user.save();

  return { id: user._id, username: user.username };
};

/*
  Esta es la función de inicio de sesión de usuario que se utiliza para autenticar a los usuarios.
  Toma un nombre de usuario y una contraseña, verifica si el usuario existe,
  compara la contraseña proporcionada con la almacenada en la base de datos y devuelve el usuario autenticado.
  El servicio utiliza el modelo User para interactuar con la base de datos y bcryptjs para comparar las contraseñas.
  cualquier problema con vulnerabilidad de credenciales, o con usuarios duplicados, revisar aqui.
*/

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("Usuario no encontrado");

  console.log("Contraseña ingresada:", `"${password}"`); // Mostrar comillas para ver espacios ocultos
  console.log("Hash almacenado:", `"${user.password}"`);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("¿Coincide la contraseña?", isMatch);

  if (!isMatch) throw new Error("Contraseña incorrecta");

  return { id: user._id, username: user.username };
};

module.exports = { registerUser, loginUser };