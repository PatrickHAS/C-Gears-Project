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

  updateSubmit: (
    data: Partial<IUpdateUserData>,
  ) => Promise<boolean | undefined>;
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
    CELLPHONE_SAME: string;
    CELLPHONE_EXISTS: string;
    ERROR: string;
  };
}

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext,
);

export const UserSettingsProvider = ({
  children,
}: IUserSettingsProvider): ReactNode => {
  const { user, setUser } = useLoginContext();
  const [isUserSettings, setIsUserSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  const toastStyle = {
    fontFamily: "Orbitron",
    color: "black",
  };

  const TOAST_MESSAGES = {
    SUCCESS: "Data successfully!",
    NO_CHANGES: "No changes detected!",
    USERNAME_SAME: "You already use that name!",
    USERNAME_EXISTS: "Username already exists!",
    CELLPHONE_SAME: "You already use this phone number!",
    CELLPHONE_EXISTS: "The phone number already exists!",
    EMPETY_FIELDS: "Submitting empty fields is not allowed!",
    ERROR: "Error updating data!",
  };

  const showToast = (type: "success" | "error" | "info", message: string) => {
    toast[type](message, { style: toastStyle });
  };

  const updateSubmit = async (data: Partial<IUpdateUserData>) => {
    try {
      const cleanedData = Object.fromEntries(
        Object.entries(data).filter(
          ([_, value]) => value !== "" && value !== undefined,
        ),
      );
      const { data: updatedUser } = await api.patch(
        `/users/${user.id}`,
        cleanedData,
      );
      console.log("Deu Certo", data);

      showToast("success", TOAST_MESSAGES.SUCCESS);

      setUser((prev) => {
        const newUser = { ...prev!, ...updatedUser };
        localStorage.setItem("@UserId", JSON.stringify(newUser));
        return newUser;
      });
      return true;
    } catch (error: any) {
      const message = error?.response?.data?.message;

      if (message === "You already use that name") {
        showToast("error", TOAST_MESSAGES.USERNAME_SAME);
        return;
      }

      if (message === "Username already exists") {
        showToast("error", TOAST_MESSAGES.USERNAME_EXISTS);
        return;
      }

      if (message === "Cellphone already exists") {
        showToast("error", TOAST_MESSAGES.CELLPHONE_EXISTS);
        return;
      }

      if (message === "Submitting empty fields is not allowed") {
        showToast("error", TOAST_MESSAGES.EMPETY_FIELDS);
        return;
      }

      showToast("error", TOAST_MESSAGES.ERROR);
      console.error(error);
      return false;
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
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
