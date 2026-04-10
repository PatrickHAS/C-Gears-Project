import { createContext } from "react";
import { ISignatureContext } from "./types";

export const SignatureContext = createContext<ISignatureContext>(
  {} as ISignatureContext,
);
