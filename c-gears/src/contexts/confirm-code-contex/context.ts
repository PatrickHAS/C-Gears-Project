import { createContext } from "react";
import { IConfirmCodeContext } from "./types";

export const ConfirmCodeContext = createContext<IConfirmCodeContext>(
  {} as IConfirmCodeContext,
);
