"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const userAuthenticate_1 = require("../utils/userAuthenticate");
const router = express_1.default.Router();
router.post('/signup', authController_1.signUp);
router.post('/login', authController_1.Login);
router.get('/allstudents', userAuthenticate_1.authenticate, authController_1.fetchAllStudents);
router.get('/allteachers', userAuthenticate_1.authenticate, authController_1.fetchAllTeachers);
exports.default = router;
