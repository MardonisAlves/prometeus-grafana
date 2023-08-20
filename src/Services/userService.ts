import { Queue } from 'bullmq';
import UserRespositories from "../Repositories/userRepositories";
const userRepositories = new UserRespositories();

export default class UserService{

   async allUsers(){
       try {
        return await userRepositories.allUsers()
       } catch (error) {
        return error
       } 
    }

    async addQueueredis(){
     try {
        const queue = new Queue('colors',{connection:{
        host: '127.0.0.1',
        port: 6379    
        }}); 
        queue.add('cars', { color: 'blue' });
        return {message:'add job'}
     } catch (error) {
        return error
     }
    }
}