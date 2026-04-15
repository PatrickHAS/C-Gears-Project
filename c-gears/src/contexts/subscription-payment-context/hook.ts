import { useContext } from "react";
import { SubscriptionPaymentContext } from "./context";

export const useSubscriptionPaymentContext = () =>
  useContext(SubscriptionPaymentContext);
