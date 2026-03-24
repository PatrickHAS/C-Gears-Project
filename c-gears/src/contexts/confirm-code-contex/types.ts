import { ReactNode } from "react";

export interface IConfirmCodeProvider {
  children: ReactNode;
}

export interface IConfirmCodeContext {
  setShowCodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCodeModal: boolean;
  confirmCodeSubmit: (data: { code: string }) => Promise<void>;
}
