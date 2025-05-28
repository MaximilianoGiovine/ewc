"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.getAppointmentId = exports.getAppointment = exports.createAppointment = exports.getUsersId = exports.getUsers = exports.login = exports.register = void 0;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(200).json({ message: 'esta es la ruta de registro' });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(201).json({ message: 'esta es la ruta de login'
    });
});
exports.login = login;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(202).json({ message: 'esta es la ruta de getUsers'
    });
});
exports.getUsers = getUsers;
const getUsersId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(203).json({ message: 'esta es la ruta de getUsersId'
    });
});
exports.getUsersId = getUsersId;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(204).json({ message: 'aqui se crean las citas'
    });
});
exports.createAppointment = createAppointment;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(205).json({ message: 'esta es la ruta de getAppointment'
    });
});
exports.getAppointment = getAppointment;
const getAppointmentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(206).json({ message: 'esta es la ruta de getAppointmentId'
    });
});
exports.getAppointmentId = getAppointmentId;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body;
    res.status(207).json({ message: 'esta es la ruta de cancelAppointment'
    });
});
exports.cancelAppointment = cancelAppointment;
