import { Router } from "express";
import appoimentsControllers, {
  cancelAppoiment,
  createAppoiment,
} from "../controllers/appoimentsController";

const appoimentRouter = Router();

appoimentRouter.get("/", appoimentsControllers.getAppoiments);

appoimentRouter.get("/:id", appoimentsControllers.getAppoimentsById);

appoimentRouter.post("/schedule", createAppoiment);

appoimentRouter.put("/cancel/:id", cancelAppoiment);

export default appoimentRouter;
