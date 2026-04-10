import { ReactNode } from "react";

export interface ISignatureProvider {
  children: ReactNode;
}

export interface ISignatureContext {
  IsSignature: boolean;
  setIsSignature: React.Dispatch<React.SetStateAction<boolean>>;
}
