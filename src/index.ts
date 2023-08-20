import Express from "express";
import dotenv from 'dotenv';
import router from './Routes';
import workerJob from "./Redis/comsumer";

const api =  Express();
dotenv.config()
api.use(router)
api.use(Express.urlencoded({extended: true}))
api.listen(process.env.PORT)
workerJob
