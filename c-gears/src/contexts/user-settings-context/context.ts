import { createContext } from "react";
import { IUserSettingsContext } from "./types";

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext,
);
