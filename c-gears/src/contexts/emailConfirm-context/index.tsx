import { useContext, createContext, useState, ReactNode } from "react";
import api from "../../services/Api";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

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
  isMobile: boolean;
  isDbMenssage: string[];
}

export const EmailConfirmContext = createContext<IEmailConfirmContext>(
  {} as IEmailConfirmContext
);

export const EmailConfirmProvider = ({ children }: IEmailConfirmProvider) => {
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  const [isDbMenssage, setIsDbMenssage] = useState([""]);

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const emailConfirmSubmit = async (data: IEmail) => {
    try {
      const dbMenssage = await api.post("/users/confirm-email", {
        email: data.email,
      });
      setIsDbMenssage(dbMenssage.data);
      toast.info(`${isDbMenssage[0]}`, {
        position: isMobile ? "top-center" : "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: isMobile ? "90%" : "440px",
          margin: isMobile ? "0 auto" : "default",
          marginTop: isMobile ? "20px" : "default",
          borderRadius: isMobile ? "5px" : "default",
          fontSize: isMobile ? "12px" : "16px",
          color: "black",
        },
      });
    } catch (error) {
      console.error(error);

      toast.error("We did not find this email in our database.", {
        position: isMobile ? "top-center" : "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: isMobile ? "90%" : "440px",
          margin: isMobile ? "0 auto" : "default",
          marginTop: isMobile ? "20px" : "default",
          borderRadius: isMobile ? "5px" : "default",
          fontSize: isMobile ? "12px" : "16px",
          fontFamily: "Orbitron",
          letterSpacing: "0.5px",
          color: "black",
        },
      });
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
        isMobile,
      }}
    >
      {children}
    </EmailConfirmContext.Provider>
  );
};
export const useEmailConfirmContext = () => useContext(EmailConfirmContext);
