import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";
import { LoginProvier } from "./login-context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>
    <LoginProvier>{children}</LoginProvier>
  </HeaderProvider>
);
export default Provider;
