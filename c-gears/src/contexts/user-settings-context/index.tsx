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
}

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext
);

export const UserSettingsProvider = ({ children }: IUserSettingsProvider) => {
  const { user } = useLoginContext();
  const [isUserSettings, setIsUserSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  const updateSubmit = async (data: IUpdateUserData) => {
    try {
      await api
        .patch(`/users/:${user.id}`, data)
        .then((res) => res.status === 204);
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
      console.log(data, "ESTOU AQUI");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserSettingsContext.Provider
      value={{
        isUserSettings,
        setIsUserSettings,
        activeTab,
        setActiveTab,
        updateSubmit,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
