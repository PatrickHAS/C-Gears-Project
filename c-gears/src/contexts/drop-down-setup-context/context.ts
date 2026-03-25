import { createContext } from "react";
import { IDropdownSetupContext } from "./types";

export const DropdownSetupContext = createContext<IDropdownSetupContext>(
  {} as IDropdownSetupContext,
);
