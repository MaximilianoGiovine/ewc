"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = (0, express_1.Router)();
router.post('/recursos', userController_1.createUser);
router.get('/recursos', auth_1.default, userController_1.getUsers);
router.delete('/recursos/', userController_1.deleteUser);
exports.default = router;
