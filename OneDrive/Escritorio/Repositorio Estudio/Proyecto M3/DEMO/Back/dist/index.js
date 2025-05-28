"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
const Recursos_1 = __importDefault(require("./routes/Recursos"));
server_1.default.listen(envs_1.PORT, () => {
    console.log('server is running on port 3000');
});
server_1.default.use(express_1.default.json());
server_1.default.use(Recursos_1.default);
