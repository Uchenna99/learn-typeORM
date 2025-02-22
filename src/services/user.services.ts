import { CreateUserDTO } from "../dtos/createUser.dto";
import { User } from "../entity/User";



export interface UserServices {
    createUser (data: CreateUserDTO): Promise<User>;
    getAllUsers (): Promise<User[]>;
    updateUser (data: Partial<CreateUserDTO>): Promise<void>;
    deleteUser (data: Partial<CreateUserDTO>): Promise<void>;
}