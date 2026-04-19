import { useContext } from "react";
import { DropDownCountriesContext } from "./context";

export const useDropDownCountriesContext = () =>
  useContext(DropDownCountriesContext);
