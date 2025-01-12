import { useContext, createContext, useState, ReactNode } from "react";
import api from "../../services/Api";

interface IEmailConfirmProvider {
  children: ReactNode;
}

interface IEmail {
  email: string;
  emailConfirm: string;
}

interface IEmailConfirmContext {
  setIsEmailConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDbMenssage: React.Dispatch<React.SetStateAction<string[]>>;
  emailConfirmSubmit: (data: IEmail) => Promise<void>;
  isEmailConfirm: boolean;
  isDbMenssage: string[];
}

export const EmailConfirmContext = createContext<IEmailConfirmContext>(
  {} as IEmailConfirmContext
);

export const EmailConfirmProvider = ({ children }: IEmailConfirmProvider) => {
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  const [isDbMenssage, setIsDbMenssage] = useState([""]);

  const emailConfirmSubmit = async (data: IEmail) => {
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
    <EmailConfirmContext.Provider
      value={{
        isEmailConfirm,
        setIsEmailConfirm,
        isDbMenssage,
        emailConfirmSubmit,
        setIsDbMenssage,
      }}
    >
      {children}
    </EmailConfirmContext.Provider>
  );
};
export const useEmailConfirmContext = () => useContext(EmailConfirmContext);
