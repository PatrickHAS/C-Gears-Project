import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/Api";
import { useEmailConfirmContext } from "../emailConfirm-context";
import { toast } from "react-toastify";

interface IPasswordResetProvider {
  children: ReactNode;
}

interface IPasswordReset {
  password: string;
  passwordConfirm: string;
}

interface IPasswordResetContext {
  setIsPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDbMenssageReset: React.Dispatch<React.SetStateAction<string[]>>;
  passwordResetSubmit: (data: IPasswordReset) => Promise<void>;
  isPasswordReset: boolean;
  isDbMenssageReset: string[];
}

export const PasswordResetContext = createContext<IPasswordResetContext>(
  {} as IPasswordResetContext
);

export const PasswordResetProvider = ({ children }: IPasswordResetProvider) => {
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isDbMenssageReset, setIsDbMenssageReset] = useState([""]);

  const { isMobile } = useEmailConfirmContext();

  const passwordResetSubmit = async (data: IPasswordReset) => {
    try {
      const dbMenssageReset = await api.post("/users/password-reset", {
        password: data.password,
      });
      setIsDbMenssageReset(dbMenssageReset.data);

      toast.success("Password updated successfully!", {
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
    } catch (error) {
      console.error(error);

      toast.error("", {
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
    <PasswordResetContext.Provider
      value={{
        isDbMenssageReset,
        isPasswordReset,
        setIsDbMenssageReset,
        setIsPasswordReset,
        passwordResetSubmit,
      }}
    >
      {children}
    </PasswordResetContext.Provider>
  );
};
export const usePasswordResetContext = () => useContext(PasswordResetContext);
