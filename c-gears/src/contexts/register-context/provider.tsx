import { useState } from "react";
import { IRegisterData, IRegisterProvider } from "./types";
import { useMediaQuery } from "react-responsive";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { RegisterContext } from "./context";

export const RegisterProvider = ({ children }: IRegisterProvider) => {
  const [isRegister, setIsRegister] = useState(false);
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const registerSubmit = async (data: IRegisterData) => {
    try {
      await api.post("/users", data).then((res) => res.status === 201);
      document.querySelectorAll("input").forEach((input) => (input.value = ""));

      toast.success("Account created successfully!", {
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

      toast.error("Username, email or phone number already registered!", {
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <RegisterContext.Provider
      value={{
        isRegister,
        registerSubmit,
        setIsRegister,
        phone,
        setPhone,
        setShowPassword,
        showPassword,
        togglePasswordVisibility,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
