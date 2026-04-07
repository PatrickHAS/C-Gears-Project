import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IAuthUser } from "../interfaces";

interface ITokenPayload {
  sub: string;
  isAdm: boolean;
  isActive: boolean;
  availability: boolean;
}

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  const queryToken = req.query.token as string;

  if (!authHeader && !queryToken) {
    return res.status(401).json({
      message: "Missing authorization token",
    });
  }

  const token = authHeader ? authHeader.split(" ")[1] : queryToken;

  try {
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY as string,
    ) as ITokenPayload;

    const user: IAuthUser = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
      isActive: decoded.isActive,
      availability: decoded.availability,
    };

    req.user = user;

    return next();
  } catch {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default ensureAuthMiddleware;
