import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";
import { LoginProvier } from "./login-context";
import { RegisterProvider } from "./register-context";
import { EmailConfirmProvider } from "./email-confirm-context";
import { PasswordResetProvider } from "./password-reset-context";
import { DropdownSetupProvider } from "./drop-down-setup-context";
import { UserSettingsProvider } from "./user-settings-context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>
    <LoginProvier>
      <RegisterProvider>
        <EmailConfirmProvider>
          <PasswordResetProvider>
            <DropdownSetupProvider>
              <UserSettingsProvider>{children}</UserSettingsProvider>
            </DropdownSetupProvider>
          </PasswordResetProvider>
        </EmailConfirmProvider>
      </RegisterProvider>
    </LoginProvier>
  </HeaderProvider>
);
export default Provider;
