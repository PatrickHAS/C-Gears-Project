import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";
import { LoginProvier } from "./login-context";
import { RegisterProvider } from "./register-context";
import { PassresetProvider } from "./passreset-context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>
    <LoginProvier>
      <RegisterProvider>
        <PassresetProvider>{children}</PassresetProvider>
      </RegisterProvider>
    </LoginProvier>
  </HeaderProvider>
);
export default Provider;
