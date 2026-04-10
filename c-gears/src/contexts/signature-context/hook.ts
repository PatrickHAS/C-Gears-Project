import { useContext } from "react";
import { SignatureContext } from "./context";

export const useSignatureContext = () => useContext(SignatureContext);
