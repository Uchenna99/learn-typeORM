import express from "express"
import { UserController } from "../controllers/user.controller";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/create", userController.createUser);

userRouter.get("/getUsers", userController.getAllUsers);

userRouter.patch("/updateUser", userController.updateUser);

userRouter.delete("/deleteUser", userController.deleteUser);



export default userRouter;