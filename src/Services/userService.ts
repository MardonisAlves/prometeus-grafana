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
}