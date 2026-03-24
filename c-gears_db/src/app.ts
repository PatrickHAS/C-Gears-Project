import "reflect-metadata";
import express from "express";
import cors from "cors";
import handleErrorMiddleware from "./middlewares/handle-error.middleware";
import userRoutes from "./routes/user";
import sessionRoutes from "./routes/session";
import { linkedAccountRoutes } from "./routes/linked-account";
import passport from "./config/passport-steam";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/linked-accounts", linkedAccountRoutes);
app.use(handleErrorMiddleware);

export default app;
