import { NextFunction, Request, Response } from "express";
import { UserServiceImpl } from "../services/implementation/user.service.impl";
import { CreateUserDTO } from "../dtos/createUser.dto";
import { StatusCodes } from "http-status-codes";


export class UserController {
    private userServices: UserServiceImpl;

    constructor() {
        this.userServices = new UserServiceImpl();
    }

    public createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const data = req.body as CreateUserDTO;
            const newUser = await this.userServices.createUser(data);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };

    public getAllUsers = async(
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const users = await this.userServices.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    public updateUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const data = req.body as Partial<CreateUserDTO>;
            await this.userServices.updateUser(data);
            res.status(200).json({message: "User information updated"});
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    )=>{
        try {
            const data = req.body as Partial<CreateUserDTO>;
            await this.userServices.deleteUser(data);
            res.status(200).json({message: "User deleted successfully"});
        } catch (error) {
            next(error);
        }
    };
}