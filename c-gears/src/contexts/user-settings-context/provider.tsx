import { ReactNode, useEffect, useRef, useState } from "react";
import {
  IUserSettingsProvider,
  LinkedAccount,
  UpdateSubmitResult,
} from "./types";
import { IUpdateUserData } from "../../components/user-settings/UserSettings";
import { toast, ToastOptions } from "react-toastify";
import api from "../../services/Api";
import { UserSettingsContext } from "./context";
import { useMediaQuery } from "react-responsive";
import { useLoginContext } from "../login-context/hook";

export const UserSettingsProvider = ({
  children,
}: IUserSettingsProvider): ReactNode => {
  const { user } = useLoginContext();
  const [linkedAccounts, setLinkedAccounts] = useState<LinkedAccount[]>([]);
  const [pendingSensitiveUpdate, setPendingSensitiveUpdate] =
    useState<Partial<IUpdateUserData> | null>(null);
  const [isUserSettings, setIsUserSettings] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    "myData" | "myAddress" | "changeEmail" | "changePass" | "linkAccount"
  >("myData");

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const toastStyle: ToastOptions = {
    position: isMobile ? "top-center" : "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    style: {
      width: isMobile ? "90%" : "fit-content",
      margin: isMobile ? "0 auto" : undefined,
      marginTop: isMobile ? "20px" : undefined,
      borderRadius: isMobile ? "5px" : undefined,
      fontSize: isMobile ? "12px" : "16px",
      fontFamily: "Orbitron",
      letterSpacing: "0.5px",
      color: "black",
    },
  };

  const TOAST_MESSAGES = {
    SUCCESS: "Data successfully!",
    UPDATE_SUCCESS: "Update confirmed successfully!",
    UPDATE_EMAIL_SUCCESS: "Email updated successfully! You will be logged out!",
    UPDATE_PASSWORD_SUCCESS:
      "Password updated successfully! You will be logged out!",
    CODE_SENT: "A confirmation code has been sent to your email.",
    NO_CHANGES: "No changes detected!",
    USERNAME_SAME: "You already use that name!",
    USERNAME_EXISTS: "Username already exists!",
    EMAIL_SAME: "You already use that email!",
    PASSWORD_SAME: "You already use that password!",
    CELLPHONE_SAME: "You already use this phone number!",
    CELLPHONE_EXISTS: "The phone number already exists!",
    EMPETY_FIELDS: "Submitting empty fields is not allowed!",
    INVALID_CODE: "Invalid confirmation code!",
    CODE_EXPIRED: "Confirmation code expired!",
    NOTHING_PENDING: "No pending update request!",
    ERROR: "Error updating data!",
    STEAM_LINK_SUCCESS: "Steam account successfully linked!",
    STEAM_LINK_ERROR: "Error linking Steam account!",
    STEAM_ALREADY_LINKED:
      "This Steam account is already linked to your profile!",
    STEAM_LINKED_OTHER: "This Steam account is already linked to another user!",
    LOADING_LINKED_ACCOUNTS_ERROR: "loading linked accounts error!",
    UNLINK_ACCOUNT_SUCCESS: "Account successfully unlinked!",
  };

  const showToast = (type: "success" | "error" | "info", message: string) => {
    toast[type](message, { ...toastStyle });
  };

  const updateSubmit = async (
    data: Partial<IUpdateUserData>,
  ): Promise<UpdateSubmitResult> => {
    try {
      setPendingSensitiveUpdate(null);

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

      return { status: "success" };
    } catch (error: any) {
      const message = error?.response?.data?.message;

      if (message === "You already use this password") {
        showToast("error", TOAST_MESSAGES.PASSWORD_SAME);
        return { status: "error" };
      }

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

  const processedUrl = useRef(false);

  const refreshAccounts = async () => {
    const token = localStorage.getItem("@Token");

    if (!token) {
      setLinkedAccounts([]);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const response = await api.get("/linked-accounts/me");
      setLinkedAccounts(response.data.linkedAccounts || []);
    } catch (error: any) {
      if (error.response?.status !== 401) {
        showToast("error", TOAST_MESSAGES.LOADING_LINKED_ACCOUNTS_ERROR);
      }
      setLinkedAccounts([]);
    }
  };

  useEffect(() => {
    const handleUrlParams = () => {
      if (processedUrl.current) return;

      const urlParams = new URLSearchParams(window.location.search);
      const linkStatus = urlParams.get("linkStatus");

      if (linkStatus) {
        processedUrl.current = true;

        setTimeout(() => {
          switch (linkStatus) {
            case "success":
              showToast("success", TOAST_MESSAGES.STEAM_LINK_SUCCESS);
              refreshAccounts();
              break;
            case "already_linked":
              showToast("info", TOAST_MESSAGES.STEAM_ALREADY_LINKED);
              break;
            case "linked_to_another":
              showToast("error", TOAST_MESSAGES.STEAM_LINKED_OTHER);
              break;
            default:
              showToast("error", TOAST_MESSAGES.STEAM_LINK_ERROR);
          }

          window.history.replaceState(
            {},
            document.title,
            window.location.pathname,
          );
        }, 100);
      }
    };

    handleUrlParams();
  }, []);

  useEffect(() => {
    if (user) {
      refreshAccounts();
    } else {
      setLinkedAccounts([]);
    }
  }, [user]);

  const linkAccount = (provider: "steam" | "xbox" | "psn") => {
    const userId = localStorage.getItem("@UserId");

    if (!userId) return;

    const state = btoa(JSON.stringify({ userId }));

    window.location.href = `http://localhost:5000/linked-accounts/auth/${provider}?state=${state}`;
  };

  const unlinkAccount = async (provider: string) => {
    const account = linkedAccounts.find(
      (acc) => acc.provider === provider && acc.status === "active",
    );

    if (!account) return;

    try {
      await api.patch(`/linked-accounts/unlink/${account.id}`);
      showToast("success", TOAST_MESSAGES.UNLINK_ACCOUNT_SUCCESS);
      await refreshAccounts();
    } catch (error: any) {
      const message =
        error.response?.data?.message || TOAST_MESSAGES.STEAM_LINK_ERROR;
      showToast("error", message);
    }
  };

  const getGamertag = (provider: string) => {
    return (
      linkedAccounts.find(
        (acc) => acc.provider === provider && acc.status === "active",
      )?.gamertag || ""
    );
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
        linkAccount,
        linkedAccounts,
        refreshAccounts,
        unlinkAccount,
        getGamertag,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};
