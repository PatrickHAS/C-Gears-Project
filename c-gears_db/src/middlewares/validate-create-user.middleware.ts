import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";

const validateCreateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    surname,
    username,
    email,
    cellphone,
    birthday,
    password,
    address: { street, number, apt_unit, neighborhoods, state, city, zipcode },
  } = req.body;

  if (name === "") {
    throw new AppError("name is required", 400);
  }

  if (!name) {
    throw new AppError("Field name is required", 400);
  }

  if (surname === "") {
    throw new AppError("surname is required", 400);
  }

  if (!surname) {
    throw new AppError("Field surname is required", 400);
  }

  if (username === "") {
    throw new AppError("username is required", 400);
  }

  if (!username) {
    throw new AppError("Field username is required", 400);
  }

  if (email === "") {
    throw new AppError("email is required", 400);
  }

  if (!email) {
    throw new AppError("Field email is required", 400);
  }

  if (cellphone === "") {
    throw new AppError("cellphone is required", 400);
  }

  if (!cellphone) {
    throw new AppError("Field cellphone is required", 400);
  }

  if (birthday === "") {
    throw new AppError("birthday is required", 400);
  }

  if (!birthday) {
    throw new AppError("Field birthday is required", 400);
  }

  if (password === "") {
    throw new AppError("password is required", 400);
  }

  if (!password) {
    throw new AppError("Field password is required", 400);
  }

  if (street === "") {
    throw new AppError("street is required", 400);
  }

  if (!street) {
    throw new AppError("Field street is required", 400);
  }

  if (number === "") {
    throw new AppError("number is required", 400);
  }

  if (!number) {
    throw new AppError("Field number is required", 400);
  }

  if (number === "") {
    throw new AppError("number is required", 400);
  }

  if (apt_unit === undefined) {
    throw new AppError("Field apt_unit is required", 400);
  }

  if (neighborhoods === undefined) {
    throw new AppError("Field neighborhoods is required", 400);
  }

  if (state === "") {
    throw new AppError("state is required", 400);
  }

  if (!state) {
    throw new AppError("Field state is required", 400);
  }

  if (city === "") {
    throw new AppError("city is required", 400);
  }

  if (!city) {
    throw new AppError("Field city is required", 400);
  }

  if (zipcode === "") {
    throw new AppError("zipcode is required", 400);
  }

  if (!zipcode) {
    throw new AppError("Field zipcode is required", 400);
  }

  return next();
};
export default validateCreateUserMiddleware;
