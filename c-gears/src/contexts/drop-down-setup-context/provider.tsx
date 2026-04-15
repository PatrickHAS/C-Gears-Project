import { useState } from "react";
import { IModalSetupProvider } from "./types";
import { DropdownSetupContext } from "./context";

export const DropdownSetupProvider = ({ children }: IModalSetupProvider) => {
  const [isDropdownSetup, setIsDropdownSetup] = useState(false);
  const [isDropdownCountry, setIsDropdownCountry] = useState(false);

  return (
    <DropdownSetupContext.Provider
      value={{
        isDropdownSetup,
        setIsDropdownSetup,
        isDropdownCountry,
        setIsDropdownCountry,
      }}
    >
      {children}
    </DropdownSetupContext.Provider>
  );
};
