import { ReactNode } from "react";

export interface IModalSetupProvider {
  children: ReactNode;
}

export interface IDropdownSetupContext {
  setIsDropdownSetup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDropdownCountry: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownSetup: boolean;
  isDropdownCountry: boolean;
}
