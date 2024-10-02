import { Request, Response, NextFunction } from "express";

const verifyAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message:
        "Access denied. You do not have permission to view this resource.",
    });
  }

  return next();
};
export default verifyAdmMiddleware;
