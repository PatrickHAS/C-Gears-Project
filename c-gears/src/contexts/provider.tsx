import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";
import { LoginProvier } from "./login-context";
import { RegisterProvider } from "./register-context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>
    <LoginProvier>
      <RegisterProvider>{children}</RegisterProvider>
    </LoginProvier>
  </HeaderProvider>
);
export default Provider;
