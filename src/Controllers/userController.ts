import { Request, Response } from "express";
export default class UserController{

    async allUsers(req: Request, res:Response){
        return res.json({
            status: 200,
            message:'Teste de rota'
        })
    }
}