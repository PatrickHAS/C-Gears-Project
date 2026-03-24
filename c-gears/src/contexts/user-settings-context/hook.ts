import { useContext } from "react";
import { UserSettingsContext } from "./context";

export const useUserSettingsContext = () => useContext(UserSettingsContext);
