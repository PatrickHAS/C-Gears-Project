import { ReactNode } from "react";

export interface IEmailConfirmProvider {
  children: ReactNode;
}

export interface IEmail {
  email: string;
  emailConfirm: string;
}

export interface IEmailConfirmContext {
  setIsEmailConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  emailConfirmSubmit: (data: IEmail) => Promise<void>;
  isEmailConfirm: boolean;
  isMobile: boolean;
}
