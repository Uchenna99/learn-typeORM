import { User } from "../../entity/User";
import { UserServices } from "../user.services";
import { AppDataSource } from "../../data-source";
import { CreateUserDTO } from "../../dtos/createUser.dto";

export const userRepo = AppDataSource.getRepository(User);



export class UserServiceImpl implements UserServices {
    
    async createUser(data: CreateUserDTO): Promise<User> {
        const findUser = await userRepo.findOneBy({email: data.email})
        if(findUser) {
            throw new Error('Email already exists');
        }
        const newUser = await userRepo.save(data);
        return newUser;
    }
    
    
    async getAllUsers(): Promise<User[]> {
        const allUsers = await userRepo.find();
        return allUsers;
    }

    
    async updateUser(data: Partial<CreateUserDTO>): Promise<void> {
        const findUser = await userRepo.findOneBy({email: data.email})
        if(!findUser) {
            throw new Error('User not found');
        }
        await userRepo.update(findUser, data);
    }
    

    async deleteUser(data: Partial<CreateUserDTO>): Promise<void> {
        await userRepo.delete({email: data.email});
    }
}