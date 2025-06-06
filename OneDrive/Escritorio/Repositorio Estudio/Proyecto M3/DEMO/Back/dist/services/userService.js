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
exports.deleteUserService = exports.getUserService = exports.createUserService = void 0;
let users = [];
let id = 1;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id: id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.createUserService = createUserService;
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUserService = getUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => {
        return user.id !== id;
    });
});
exports.deleteUserService = deleteUserService;
