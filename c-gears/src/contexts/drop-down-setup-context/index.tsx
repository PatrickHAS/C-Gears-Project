import { useContext, createContext, useState, ReactNode } from "react";

interface IModalSetupProvider {
  children: ReactNode;
}

interface IDropdownSetupContext {
  setIsDropdownSetup: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownSetup: boolean;
}

export const DropdownSetupContext = createContext<IDropdownSetupContext>(
  {} as IDropdownSetupContext
);

export const DropdownSetupProvider = ({ children }: IModalSetupProvider) => {
  const [isDropdownSetup, setIsDropdownSetup] = useState(false);

  return (
    <DropdownSetupContext.Provider
      value={{ isDropdownSetup, setIsDropdownSetup }}
    >
      {children}
    </DropdownSetupContext.Provider>
  );
};
export const useDropdownSetupContext = () => useContext(DropdownSetupContext);
