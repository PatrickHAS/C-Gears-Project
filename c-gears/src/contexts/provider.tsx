import { ReactNode } from "react";
import { UserSettingsProvider } from "./user-settings-context/provider";
import { ConfirmCodeProvider } from "./confirm-code-contex/provider";
import { RegisterProvider } from "./register-context/provider";
import { PasswordResetProvider } from "./password-reset-context/provider";
import { LoginProvier } from "./login-context/provider";
import { HeaderProvider } from "./header-context/provider";
import { EmailConfirmProvider } from "./email-confirm-context/provider";
import { DropdownSetupProvider } from "./drop-down-setup-context/provider";
import { SignatureProvider } from "./signature-context/provider";
import { SubscriptionPaymentProvider } from "./subscription-payment-context/provider";

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
              <UserSettingsProvider>
                <ConfirmCodeProvider>
                  <SignatureProvider>
                    <SubscriptionPaymentProvider>
                      {children}
                    </SubscriptionPaymentProvider>
                  </SignatureProvider>
                </ConfirmCodeProvider>
              </UserSettingsProvider>
            </DropdownSetupProvider>
          </PasswordResetProvider>
        </EmailConfirmProvider>
      </RegisterProvider>
    </LoginProvier>
  </HeaderProvider>
);
export default Provider;
