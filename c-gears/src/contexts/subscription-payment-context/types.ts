import { ReactNode } from "react";

export interface ISubscriptionPaymentProvider {
  children: ReactNode;
}

export interface ISubscriptionPaymentContext {
  IsSubscriptionPayment: boolean;
  setIsSubscriptionPayment: React.Dispatch<React.SetStateAction<boolean>>;
  activePayment: "creditDebit" | "paypal" | "moreMethods";
  setActivePayment: React.Dispatch<
    React.SetStateAction<"creditDebit" | "paypal" | "moreMethods">
  >;
  isCheckboxDisclaimers: boolean;
  setIsCheckboxDisclaimers: React.Dispatch<React.SetStateAction<boolean>>;
  formData: {
    name: string;
    surname: string;
    country: string;
    zipcode: string;
    numberCard: string;
    expiration: string;
    cvc: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      surname: string;
      country: string;
      zipcode: string;
      numberCard: string;
      expiration: string;
      cvc: string;
    }>
  >;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  areFieldsFilled: boolean;
  isButtonDisabled: boolean;
  isValidCard: boolean;
  isValidExpiry: boolean;
  isValidCvc: boolean;
}
