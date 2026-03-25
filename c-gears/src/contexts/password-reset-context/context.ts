import { createContext } from "react";
import { IPasswordResetContext } from "./types";

export const PasswordResetContext = createContext<IPasswordResetContext>(
  {} as IPasswordResetContext,
);
