import { useContext, createContext, useState, ReactNode } from "react";

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
}

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext
);

export const UserSettingsProvider = ({ children }: IUserSettingsProvider) => {
  const [isUserSettings, setIsUserSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  return (
    <UserSettingsContext.Provider
      value={{ isUserSettings, setIsUserSettings, activeTab, setActiveTab }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
