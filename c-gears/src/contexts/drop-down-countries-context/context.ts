import { createContext } from "react";
import { IDropDownCountriesContext } from "./types";

export const DropDownCountriesContext =
  createContext<IDropDownCountriesContext>({} as IDropDownCountriesContext);
