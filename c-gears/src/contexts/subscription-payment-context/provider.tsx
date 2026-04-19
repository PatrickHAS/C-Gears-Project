import { useState } from "react";
import { ISubscriptionPaymentProvider } from "./types";
import { SubscriptionPaymentContext } from "./context";
import {
  formatCardNumber,
  formatCVC,
  formatExpiry,
} from "../../utils/formatters";

interface IFormDataProps {
  name: string;
  surname: string;
  country: string;
  zipcode: string;
  numberCard: string;
  expiration: string;
  cvc: string;
}

export const SubscriptionPaymentProvider = ({
  children,
}: ISubscriptionPaymentProvider) => {
  const [IsSubscriptionPayment, setIsSubscriptionPayment] =
    useState<boolean>(false);
  const [activePayment, setActivePayment] = useState<
    "creditDebit" | "paypal" | "moreMethods"
  >("creditDebit");

  const [isCheckboxDisclaimers, setIsCheckboxDisclaimers] = useState(false);
  const [formData, setFormData] = useState<IFormDataProps>({
    name: "",
    surname: "",
    country: "",
    zipcode: "",
    numberCard: "",
    expiration: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as keyof IFormDataProps;
    let value = e.target.value;

    if (id === "numberCard") {
      value = formatCardNumber(value);
    }

    if (id === "expiration") {
      value = formatExpiry(value);
    }

    if (id === "cvc") {
      value = formatCVC(value);
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const areFieldsFilled = Object.values(formData).every(
    (value) => typeof value === "string" && value.trim() !== "",
  );

  const isValidCard = formData.numberCard.replace(/\s/g, "").length >= 13;
  const isValidExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiration);
  const isValidCvc = /^\d{3,4}$/.test(formData.cvc);

  const isButtonDisabled =
    !isCheckboxDisclaimers ||
    !areFieldsFilled ||
    !isValidCard ||
    !isValidExpiry ||
    !isValidCvc;

  return (
    <SubscriptionPaymentContext.Provider
      value={{
        IsSubscriptionPayment,
        setIsSubscriptionPayment,
        activePayment,
        setActivePayment,
        isCheckboxDisclaimers,
        setIsCheckboxDisclaimers,
        formData,
        setFormData,
        handleChange,
        areFieldsFilled,
        isButtonDisabled,
        isValidCard,
        isValidCvc,
        isValidExpiry,
      }}
    >
      {children}
    </SubscriptionPaymentContext.Provider>
  );
};
