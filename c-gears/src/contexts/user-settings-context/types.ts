import { ReactNode } from "react";
import { IUpdateUserData } from "../../components/user-settings/UserSettings";
import { ToastOptions } from "react-toastify";

export interface IUserSettingsProvider {
  children: ReactNode;
}

export type UpdateSubmitResult =
  | { status: "success" }
  | { status: "requires-confirmation" }
  | { status: "error" };

export type LinkedAccount = {
  id: string;
  provider: "steam" | "xbox" | "psn";
  status: "active" | "inactive";
  gamertag: string;
};

export interface IUserSettingsContext {
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

  toastStyle: ToastOptions;

  TOAST_MESSAGES: {
    SUCCESS: string;
    UPDATE_SUCCESS: string;
    UPDATE_EMAIL_SUCCESS: string;
    UPDATE_PASSWORD_SUCCESS: string;
    CODE_SENT: string;
    NO_CHANGES: string;
    USERNAME_SAME: string;
    USERNAME_EXISTS: string;
    EMAIL_SAME: string;
    PASSWORD_SAME: string;
    CELLPHONE_SAME: string;
    CELLPHONE_EXISTS: string;
    EMPETY_FIELDS: string;
    INVALID_CODE: string;
    CODE_EXPIRED: string;
    NOTHING_PENDING: string;
    ERROR: string;
    STEAM_LINK_SUCCESS: string;
    STEAM_LINK_ERROR: string;
    STEAM_ALREADY_LINKED: string;
    STEAM_LINKED_OTHER: string;
    XBOX_LINK_SUCCESS: string;
    XBOX_LINK_ERROR: string;
    XBOX_ALREADY_LINKED: string;
    XBOX_LINKED_OTHER: string;
    PSN_LINK_SUCCESS: string;
    PSN_LINK_ERROR: string;
    PSN_ALREADY_LINKED: string;
    PSN_LINKED_OTHER: string;
    LOADING_LINKED_ACCOUNTS_ERROR: string;
    UNLINK_ACCOUNT_SUCCESS: string;
  };

  linkedAccounts: LinkedAccount[];
  refreshAccounts: () => Promise<void>;
  linkAccount: (provider: "steam" | "xbox" | "psn") => void;
  unlinkAccount: (provider: string) => Promise<void>;
  getGamertag: (provider: string) => string;
}
