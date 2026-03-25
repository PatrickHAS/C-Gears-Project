import { useContext } from "react";
import { EmailConfirmContext } from "./context";

export const useEmailConfirmContext = () => useContext(EmailConfirmContext);
