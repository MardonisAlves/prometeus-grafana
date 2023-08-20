"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Routes_1 = __importDefault(require("./Routes"));
const api = (0, express_1.default)();
dotenv_1.default.config();
api.use(Routes_1.default);
api.use(express_1.default.urlencoded({ extended: true }));
api.listen(process.env.PORT);
