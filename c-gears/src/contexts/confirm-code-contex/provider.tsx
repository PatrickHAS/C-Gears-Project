import { ReactNode, useState } from "react";
import { IConfirmCodeProvider } from "./types";
import { useUserSettingsContext } from "../user-settings-context/hook";
import { useLoginContext } from "../login-context";
import { ConfirmCodeContext } from "./context";
import api from "../../services/Api";

export const ConfirmCodeProvider = ({
  children,
}: IConfirmCodeProvider): ReactNode => {
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const {
    TOAST_MESSAGES,
    showToast,
    setPendingSensitiveUpdate,
    pendingSensitiveUpdate,
  } = useUserSettingsContext();

  const { logout } = useLoginContext();

  const confirmCodeSubmit = async (data: { code: string }) => {
    try {
      if (!pendingSensitiveUpdate) {
        showToast("error", TOAST_MESSAGES.NOTHING_PENDING);
        return;
      }

      await api.patch("/users/confirm-update", {
        code: data.code,
      });

      const wasEmailChange = !!pendingSensitiveUpdate.email;
      const wasPasswordChange = !!pendingSensitiveUpdate.password;

      setPendingSensitiveUpdate(null);
      setShowCodeModal(false);

      if (wasEmailChange) {
        showToast("success", TOAST_MESSAGES.UPDATE_EMAIL_SUCCESS);

        setTimeout(() => logout(), 1500);
        return;
      }

      if (wasPasswordChange) {
        showToast("success", TOAST_MESSAGES.UPDATE_PASSWORD_SUCCESS);

        setTimeout(() => logout(), 1500);
        return;
      }
    } catch (error: any) {
      const message = error?.response?.data?.message;

      if (message === "Invalid confirmation code") {
        showToast("error", TOAST_MESSAGES.INVALID_CODE);
        return;
      }

      if (message === "Code expired") {
        showToast("error", TOAST_MESSAGES.CODE_EXPIRED);
        return;
      }

      showToast("error", TOAST_MESSAGES.ERROR);
    }
  };

  return (
    <ConfirmCodeContext.Provider
      value={{
        showCodeModal,
        setShowCodeModal,
        confirmCodeSubmit,
      }}
    >
      {children}
    </ConfirmCodeContext.Provider>
  );
};
