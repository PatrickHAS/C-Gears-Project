import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export interface ILoginProvider {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: Date;
  ssn: string;
  email: string;
  password: string;
  isAdm?: boolean;
  address: {
    id: string;
    street: string;
    number: string;
    apt_unit?: string | null;
    neighborhoods?: string | null;
    city: string;
    state: string;
    zipcode: string;
  };
}

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  id: string | null;
  navigate: NavigateFunction;
  onSubmitLogin: (data: ILoginData) => Promise<void>;
  logout: () => void;
}
