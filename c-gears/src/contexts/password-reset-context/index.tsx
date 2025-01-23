import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

interface IPasswordResetProvider {
  children: ReactNode;
}

interface IPasswordReset {
  password: string;
  passwordConfirm: string;
}

interface IPasswordResetContext {
  setIsPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
  passwordResetSubmit: (
    data: IPasswordReset,
    id: string,
    token: string
  ) => Promise<void>;
  isPasswordReset: boolean;
}

export const PasswordResetContext = createContext<IPasswordResetContext>(
  {} as IPasswordResetContext
);

export const PasswordResetProvider = ({ children }: IPasswordResetProvider) => {
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const passwordResetSubmit = async (
    data: IPasswordReset,
    id: string,
    token: string
  ) => {
    try {
      await api.patch(`/users/pass-reset/${id}/${token}`, {
        password: data.password,
      });

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

      toast.error("Link expired", {
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
    <PasswordResetContext.Provider
      value={{
        isPasswordReset,
        setIsPasswordReset,
        passwordResetSubmit,
      }}
    >
      {children}
    </PasswordResetContext.Provider>
  );
};
export const usePasswordResetContext = () => useContext(PasswordResetContext);
