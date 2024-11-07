import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/Api";

interface IRegisterProvider {
  children: ReactNode;
}

export interface IRegisterData {
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
  isAdm?: boolean;
  address: {
    street: string;
    number: string;
    apt_unit?: string | null;
    neighborhoods?: string | null;
    city: string;
    state: string;
    zipcode: string;
  };
}

interface IRegisterContext {
  isRegister: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  registerSubmit: (data: IRegisterData) => Promise<void>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  togglePasswordVisibility: () => void;
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

export const RegisterProvider = ({ children }: IRegisterProvider) => {
  const [isRegister, setIsRegister] = useState(false);
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerSubmit = async (data: IRegisterData) => {
    try {
      await api.post("/users", data).then((res) => res.status === 201);
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
    } catch (error) {
      console.error(error);
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
export const useRegisterContext = () => useContext(RegisterContext);
