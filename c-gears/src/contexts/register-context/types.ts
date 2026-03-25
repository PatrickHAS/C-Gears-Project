import { ReactNode } from "react";

export interface IRegisterProvider {
  children: ReactNode;
}

export interface IRegisterData {
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: Date;
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

export interface IRegisterContext {
  isRegister: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  registerSubmit: (data: IRegisterData) => Promise<void>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  togglePasswordVisibility: () => void;
}
