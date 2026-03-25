import { createContext } from "react";
import { IRegisterContext } from "./types";

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext,
);
