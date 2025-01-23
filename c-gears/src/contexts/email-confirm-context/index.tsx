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
  emailConfirmSubmit: (data: IEmail) => Promise<void>;
  isEmailConfirm: boolean;
  isMobile: boolean;
}

export const EmailConfirmContext = createContext<IEmailConfirmContext>(
  {} as IEmailConfirmContext
);

export const EmailConfirmProvider = ({ children }: IEmailConfirmProvider) => {
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const emailConfirmSubmit = async (data: IEmail) => {
    try {
      await api.post("/users/confirm-email", {
        email: data.email,
      });

      toast.info("A password reset link has been sent to your email!", {
        position: isMobile ? "top-center" : "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: isMobile ? "90%" : "fit-content",
          margin: isMobile ? "0 auto" : "default",
          marginTop: isMobile ? "20px" : "default",
          borderRadius: isMobile ? "5px" : "default",
          fontSize: isMobile ? "12px" : "16px",
          fontFamily: "Orbitron",
          letterSpacing: "0.5px",
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
          width: isMobile ? "90%" : "fit-content",
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
        emailConfirmSubmit,
        isMobile,
      }}
    >
      {children}
    </EmailConfirmContext.Provider>
  );
};
export const useEmailConfirmContext = () => useContext(EmailConfirmContext);
