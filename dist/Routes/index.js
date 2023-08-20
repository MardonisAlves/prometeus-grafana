"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../Controllers/userController"));
const router = (0, express_1.Router)();
router.get('/api/teste', new userController_1.default().allUsers);
exports.default = router;