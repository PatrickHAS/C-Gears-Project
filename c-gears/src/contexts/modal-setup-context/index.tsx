import { useContext, createContext, useState, ReactNode } from "react";

interface IModalSetupProvider {
  children: ReactNode;
}

interface IModalSetupContext {
  setIsModalSetup: React.Dispatch<React.SetStateAction<boolean>>;
  isModalSetup: boolean;
}

export const ModalSetupContext = createContext<IModalSetupContext>(
  {} as IModalSetupContext
);

export const ModalSetupProvider = ({ children }: IModalSetupProvider) => {
  const [isModalSetup, setIsModalSetup] = useState(false);

  return (
    <ModalSetupContext.Provider value={{ isModalSetup, setIsModalSetup }}>
      {children}
    </ModalSetupContext.Provider>
  );
};
export const useModalSetupContext = () => useContext(ModalSetupContext);
