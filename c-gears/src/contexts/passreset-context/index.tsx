import { useContext, createContext, useState, ReactNode } from "react";
import api from "../../services/Api";

interface IPassresetProvider {
  children: ReactNode;
}

interface IEmail {
  email: string;
  emailConfirm: string;
}

interface IPassresetContext {
  setIsPassreset: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDbMenssage: React.Dispatch<React.SetStateAction<string[]>>;
  passResetSubmit: (data: IEmail) => Promise<void>;
  isPassreset: boolean;
  isDbMenssage: string[];
}

export const PassresetContext = createContext<IPassresetContext>(
  {} as IPassresetContext
);

export const PassresetProvider = ({ children }: IPassresetProvider) => {
  const [isPassreset, setIsPassreset] = useState(false);
  const [isDbMenssage, setIsDbMenssage] = useState([""]);

  const passResetSubmit = async (data: IEmail) => {
    try {
      const dbMenssage = await api.post("/users/confirm-email", {
        email: data.email,
      });
      setIsDbMenssage(dbMenssage.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PassresetContext.Provider
      value={{
        isPassreset,
        setIsPassreset,
        isDbMenssage,
        passResetSubmit,
        setIsDbMenssage,
      }}
    >
      {children}
    </PassresetContext.Provider>
  );
};
export const usePassresetContext = () => useContext(PassresetContext);
