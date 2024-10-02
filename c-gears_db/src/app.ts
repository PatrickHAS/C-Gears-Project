import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/user";
import sessionRoutes from "./routes/session";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use(handleErrorMiddleware);

export default app;
