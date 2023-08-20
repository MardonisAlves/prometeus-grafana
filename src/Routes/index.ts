import { Router } from "express";
import UserController from "../Controllers/userController";

const router= Router();
router.get('/api/teste', new UserController().allUsers)

export default router;