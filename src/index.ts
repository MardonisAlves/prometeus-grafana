import Express from "express";
const api =  Express();
api.use(Express.urlencoded({extended: true}))

api.listen(process.env.PORT)