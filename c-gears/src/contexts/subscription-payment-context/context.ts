import { createContext } from "react";
import { ISubscriptionPaymentContext } from "./types";

export const SubscriptionPaymentContext =
  createContext<ISubscriptionPaymentContext>({} as ISubscriptionPaymentContext);
