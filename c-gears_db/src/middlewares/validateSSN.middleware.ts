import { Request, Response, NextFunction } from "express";
import { cpf } from "cpf-cnpj-validator";
import { AppError } from "../errors/appError";
import { mask } from "ssn-validator";

const validateSSNMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ssn } = req.body;

  if (ssn === "") {
    throw new AppError("CPF/SSN is required", 400);
  }

  if (!ssn) {
    throw new AppError("Field ssn is required", 400);
  }

  if (cpf.isValid(ssn)) {
    return next();
  }

  const ssnRegex = /^(?!000|666|9)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  if (ssnRegex.test(ssn) && mask(ssn)) {
    return next();
  }

  return res.status(400).json({ error: "Invalid CPF or SSN" });
};
export default validateSSNMiddleware;
