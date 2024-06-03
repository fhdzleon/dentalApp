import { Router } from 'express';
import { getUserByID, getUsers, login, register } from '../controllers/userController';


const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserByID )

userRouter.post("/register", register)

userRouter.post("/login", login)

export default userRouter;