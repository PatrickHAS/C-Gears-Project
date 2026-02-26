import { useContext, createContext, useState, ReactNode } from "react";

import api from "../../services/Api";
import { useLoginContext } from "../login-context";
import { toast } from "react-toastify";
import { IUpdateUserData } from "../../components/user-settings/UserSettings";

interface IUserSettingsProvider {
  children: ReactNode;
}

interface IUserSettingsContext {
  setIsUserSettings: React.Dispatch<React.SetStateAction<boolean>>;
  pendingSensitiveUpdate: Partial<IUpdateUserData> | null;
  setPendingSensitiveUpdate: React.Dispatch<
    React.SetStateAction<Partial<IUpdateUserData> | null>
  >;
  isUserSettings: boolean;
  activeTab:
    | "myData"
    | "myAddress"
    | "changeEmail"
    | "changePass"
    | "linkAccount";
  setActiveTab: React.Dispatch<
    React.SetStateAction<
      "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
    >
  >;

  updateSubmit: (data: Partial<IUpdateUserData>) => Promise<UpdateSubmitResult>;
  formatDateForInput: (date: Date | string) => string;

  showToast: (type: "success" | "error" | "info", message: string) => void;

  toastStyle: {
    fontFamily: string;
    color: string;
  };

  TOAST_MESSAGES: {
    SUCCESS: string;
    NO_CHANGES: string;
    USERNAME_SAME: string;
    USERNAME_EXISTS: string;
    EMAIL_SAME: string;
    CELLPHONE_SAME: string;
    CELLPHONE_EXISTS: string;
    ERROR: string;
  };
}

type UpdateSubmitResult =
  | { status: "success" }
  | { status: "requires-confirmation" }
  | { status: "error" };

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext,
);

export const UserSettingsProvider = ({
  children,
}: IUserSettingsProvider): ReactNode => {
  const { user } = useLoginContext();
  const [pendingSensitiveUpdate, setPendingSensitiveUpdate] =
    useState<Partial<IUpdateUserData> | null>(null);
  const [isUserSettings, setIsUserSettings] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  const toastStyle = {
    fontFamily: "Orbitron",
    color: "black",
  };

  const TOAST_MESSAGES = {
    SUCCESS: "Data successfully!",
    UPDATE_SUCCESS: "Update confirmed successfully!",
    UPDATE_EMAIL_SUCCESS: "Email updated successfully! You will be logged out!",
    UPDATE_PASSWORD_SUCCESS:
      "Password updated successfully! You will be logged out!",
    NO_CHANGES: "No changes detected!",
    USERNAME_SAME: "You already use that name!",
    USERNAME_EXISTS: "Username already exists!",
    EMAIL_SAME: "You already use that email!",
    CELLPHONE_SAME: "You already use this phone number!",
    CELLPHONE_EXISTS: "The phone number already exists!",
    EMPETY_FIELDS: "Submitting empty fields is not allowed!",
    ERROR: "Error updating data!",
  };

  const showToast = (type: "success" | "error" | "info", message: string) => {
    toast[type](message, { style: toastStyle });
  };

  const updateSubmit = async (
    data: Partial<IUpdateUserData>,
  ): Promise<UpdateSubmitResult> => {
    try {
      if (!user) {
        showToast("error", TOAST_MESSAGES.ERROR);
        return { status: "error" };
      }

      const cleanedData = Object.fromEntries(
        Object.entries(data).filter(
          ([_, value]) => value !== "" && value !== undefined,
        ),
      );

      const isSensitiveUpdate =
        "email" in cleanedData || "password" in cleanedData;

      await api.patch(`/users/${user.id}`, cleanedData);

      if (isSensitiveUpdate) {
        setPendingSensitiveUpdate(cleanedData);
        return { status: "requires-confirmation" };
      }

      showToast("success", TOAST_MESSAGES.UPDATE_SUCCESS);
      console.log("Data updated successfully:", cleanedData);

      return { status: "success" };
    } catch (error: any) {
      const message = error?.response?.data?.message;

      if (message === "You already use that name") {
        showToast("error", TOAST_MESSAGES.USERNAME_SAME);
        return { status: "error" };
      }

      if (message === "Username already exists") {
        showToast("error", TOAST_MESSAGES.USERNAME_EXISTS);
        return { status: "error" };
      }

      if (message === "You already use that email") {
        showToast("error", TOAST_MESSAGES.EMAIL_SAME);
        return { status: "error" };
      }

      if (message === "Cellphone already exists") {
        showToast("error", TOAST_MESSAGES.CELLPHONE_EXISTS);
        return { status: "error" };
      }

      if (message === "Submitting empty fields is not allowed") {
        showToast("error", TOAST_MESSAGES.EMPETY_FIELDS);
        return { status: "error" };
      }

      showToast("error", TOAST_MESSAGES.ERROR);
      console.error(error);
      return { status: "error" };
    }
  };

  const formatDateForInput = (date: Date | string) => {
    if (!date) return "";
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <UserSettingsContext.Provider
      value={{
        isUserSettings,
        setIsUserSettings,
        activeTab,
        setActiveTab,
        updateSubmit,
        formatDateForInput,
        TOAST_MESSAGES,
        toastStyle,
        showToast,
        pendingSensitiveUpdate,
        setPendingSensitiveUpdate,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
