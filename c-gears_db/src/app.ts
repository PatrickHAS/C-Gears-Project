import "reflect-metadata";
import express from "express";
import cors from "cors";
import handleErrorMiddleware from "./middlewares/handle-error.middleware";
import userRoutes from "./routes/user";
import sessionRoutes from "./routes/session";
import { linkedAccountRoutes } from "./routes/linked-account";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/linked-accounts", linkedAccountRoutes);
app.use(handleErrorMiddleware);

export default app;
