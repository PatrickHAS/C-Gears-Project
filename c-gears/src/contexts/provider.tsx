import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";
import { LoginProvier } from "./login-context";
import { RegisterProvider } from "./register-context";
import { EmailConfirmProvider } from "./emailConfirm-context";
import { PasswordResetProvider } from "./passwordReset.context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>
    <LoginProvier>
      <RegisterProvider>
        <EmailConfirmProvider>
          <PasswordResetProvider>{children}</PasswordResetProvider>
        </EmailConfirmProvider>
      </RegisterProvider>
    </LoginProvier>
  </HeaderProvider>
);
export default Provider;
