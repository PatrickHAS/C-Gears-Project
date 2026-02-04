import { useContext, createContext, useState, ReactNode } from "react";
import { IUpdateUserData } from "../../components/user-settings";
import api from "../../services/Api";
import { useLoginContext } from "../login-context";

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
}

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext,
);

export const UserSettingsProvider = ({ children }: IUserSettingsProvider) => {
  const { user, navigate, setUser } = useLoginContext();
  const [isUserSettings, setIsUserSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  const updateSubmit = async (data: IUpdateUserData) => {
    try {
      const response = await api.patch(`/users/${user.id}`, data);
      setUser((prevUser) => ({
        ...prevUser!,
        ...response.data,
      }));
      localStorage.setItem(
        "@UserId",
        JSON.stringify({
          ...user,
          ...response.data,
        }),
      );
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
      navigate("/", { replace: true });
    } catch (error) {
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
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
