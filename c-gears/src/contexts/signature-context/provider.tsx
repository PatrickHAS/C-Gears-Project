import { useState } from "react";
import { ISignatureProvider } from "./types";
import { SignatureContext } from "./context";

export const SignatureProvider = ({ children }: ISignatureProvider) => {
  const [IsSignature, setIsSignature] = useState<boolean>(false);

  return (
    <SignatureContext.Provider
      value={{
        IsSignature,
        setIsSignature,
      }}
    >
      {children}
    </SignatureContext.Provider>
  );
};
