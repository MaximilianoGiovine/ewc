"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if (token == "Autorizado")
        next();
    else
        res.status(400).json({ message: "No tenes permiso chiquibeibi" });
};
exports.default = auth;
