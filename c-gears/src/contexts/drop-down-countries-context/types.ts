import { ReactNode } from "react";

export interface IDropDownCountriesProvider {
  children: ReactNode;
}

export interface IDropDownCountriesContext {
  isDropdownCountry: boolean;
  setIsDropdownCountry: React.Dispatch<React.SetStateAction<boolean>>;
  countryOptions: {
    value: string;
    label: string;
  }[];
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}
