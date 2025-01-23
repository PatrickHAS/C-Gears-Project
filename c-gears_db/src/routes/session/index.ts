import { Router } from "express";
import createSessionController from "../../controllers/session/user-login.controller";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
