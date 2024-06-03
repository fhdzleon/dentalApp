import { Router } from 'express';
import userRouter from './userRoutes';
import appoimentRouter from './appoimentsRoutes';

const mainRouter: Router = Router();

mainRouter.use("/users", userRouter)

mainRouter.use('/appoiments', appoimentRouter)

export default mainRouter;