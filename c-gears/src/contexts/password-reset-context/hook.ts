import { useContext } from "react";
import { PasswordResetContext } from "./context";

export const usePasswordResetContext = () => useContext(PasswordResetContext);
