import { useState } from "react";
import { ISubscriptionPaymentProvider } from "./types";
import { SubscriptionPaymentContext } from "./context";
import { getCountryOptions } from "../../utils/countries";
import { ChangeEvent } from "react";

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
  const [country, setCountry] = useState("");
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

  const countryOptions = getCountryOptions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as keyof IFormDataProps;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const areFieldsFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  const isButtonDisabled = !isCheckboxDisclaimers || !areFieldsFilled;

  return (
    <SubscriptionPaymentContext.Provider
      value={{
        IsSubscriptionPayment,
        setIsSubscriptionPayment,
        activePayment,
        setActivePayment,
        countryOptions,
        country,
        setCountry,
        isCheckboxDisclaimers,
        setIsCheckboxDisclaimers,
        formData,
        setFormData,
        handleChange,
        areFieldsFilled,
        isButtonDisabled,
      }}
    >
      {children}
    </SubscriptionPaymentContext.Provider>
  );
};
