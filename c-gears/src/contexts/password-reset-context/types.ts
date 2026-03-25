import { ReactNode } from "react";

export interface IPasswordResetProvider {
  children: ReactNode;
}

interface IPasswordReset {
  password: string;
  passwordConfirm: string;
}

export interface IPasswordResetContext {
  setIsPasswordReset: React.Dispatch<React.SetStateAction<boolean>>;
  passwordResetSubmit: (
    data: IPasswordReset,
    id: string,
    token: string,
  ) => Promise<void>;
  isPasswordReset: boolean;
}
