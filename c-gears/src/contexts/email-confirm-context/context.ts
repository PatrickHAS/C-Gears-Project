import { createContext } from "react";
import { IEmailConfirmContext } from "./types";

export const EmailConfirmContext = createContext<IEmailConfirmContext>(
  {} as IEmailConfirmContext,
);
