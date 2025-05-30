const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/*
    este es el modelo de usuario que se utiliza para almacenar los registros de usuario en la base de datos.
    contiene los campos username y password, donde el username es único y requerido, y la contraseña se encripta antes de guardarla.
    El modelo utiliza mongoose para interactuar con MongoDB y bcryptjs para encriptar las contraseñas.
    El modelo se exporta para ser utilizado en otras partes de la aplicación.
*/

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Encriptar la contraseña antes de guardar el usuario
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);