import { Request, Response } from "express";
import UserService from "../Services/userService";
const userService = new UserService();

export default class UserController{

    async allUsers(req: Request, res:Response){
        const result = await userService.allUsers();
        return res.json(result)
    }
}