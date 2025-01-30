import { useContext, createContext, useState, ReactNode } from "react";

interface IUserSettingsProvider {
  children: ReactNode;
}

interface IUserSettingsContext {
  setIsUserSettings: React.Dispatch<React.SetStateAction<boolean>>;
  isUserSettings: boolean;
}

export const UserSettingsContext = createContext<IUserSettingsContext>(
  {} as IUserSettingsContext
);

export const UserSettingsProvider = ({ children }: IUserSettingsProvider) => {
  const [isUserSettings, setIsUserSettings] = useState(false);

  return (
    <UserSettingsContext.Provider value={{ isUserSettings, setIsUserSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};
export const useUserSettingsContext = () => useContext(UserSettingsContext);
