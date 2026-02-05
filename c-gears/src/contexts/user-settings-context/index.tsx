import { useContext, createContext, useState, ReactNode } from "react";
import { IUpdateUserData } from "../../components/user-settings";
import api from "../../services/Api";
import { useLoginContext } from "../login-context";
import { toast } from "react-toastify";

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
  updateSubmit: (data: IUpdateUserData) => Promise<void>;
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

export const UserSettingsProvider = ({ children }: IUserSettingsProvider) => {
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
    ERROR: "Error updating data!",
  };

  const showToast = (type: "success" | "error" | "info", message: string) => {
    toast[type](message, { style: toastStyle });
  };

  const updateSubmit = async (data: Partial<IUpdateUserData>) => {
    try {
      const { data: updatedUser } = await api.patch(`/users/${user.id}`, data);

      showToast("success", TOAST_MESSAGES.SUCCESS);

      setUser((prev) => {
        const newUser = { ...prev!, ...updatedUser };
        localStorage.setItem("@UserId", JSON.stringify(newUser));
        return newUser;
      });
    } catch (error: any) {
      const message = error?.response?.data?.message;

      if (message === "Username already exists") {
        showToast("error", TOAST_MESSAGES.USERNAME_EXISTS);
        return;
      }

      if (message === "Cellphone already exists") {
        showToast("error", TOAST_MESSAGES.CELLPHONE_EXISTS);
        return;
      }

      showToast("error", TOAST_MESSAGES.ERROR);
      console.error(error);
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
