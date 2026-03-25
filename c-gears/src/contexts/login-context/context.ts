import { createContext } from "react";
import { IAuthContext } from "./types";

export const LoginContext = createContext<IAuthContext>({} as IAuthContext);
