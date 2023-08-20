import { Router } from "express";
import UserController from "../Controllers/userController";
const  userController = new UserController();

const router= Router();
router.get('/api/teste', userController.allUsers)

export default router;