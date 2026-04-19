import { useState } from "react";
import { IModalSetupProvider } from "./types";
import { DropdownSetupContext } from "./context";

export const DropdownSetupProvider = ({ children }: IModalSetupProvider) => {
  const [isDropdownSetup, setIsDropdownSetup] = useState(false);

  return (
    <DropdownSetupContext.Provider
      value={{
        isDropdownSetup,
        setIsDropdownSetup,
      }}
    >
      {children}
    </DropdownSetupContext.Provider>
  );
};
