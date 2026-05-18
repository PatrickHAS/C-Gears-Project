import { useState } from "react";
import { ISubscriptionPaymentProvider } from "./types";
import { SubscriptionPaymentContext } from "./context";
import { CardNumberElement } from "@stripe/react-stripe-js";

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

  const [stripeComplete, setStripeComplete] = useState({
    number: false,
    expiry: false,
    cvc: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as keyof IFormDataProps;
    let value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const areFieldsFilled = Object.values(formData).every(
    (value) => typeof value === "string" && value.trim() !== "",
  );

  const isButtonDisabled =
    !isCheckboxDisclaimers ||
    formData.name.trim() === "" ||
    formData.surname.trim() === "" ||
    !stripeComplete.number ||
    !stripeComplete.expiry ||
    !stripeComplete.cvc;

  const handlePayment = async (stripe: any, elements: any) => {
    if (!stripe || !elements || isProcessing) return;

    setIsProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:5000/payments/webhook/create-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("@Token")}`,
          },
        },
      );

      if (!response.ok) throw new Error("Error creating payment intent.");

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: `${formData.name} ${formData.surname}`,
          },
        },
      });

      if (result.error) {
        return { success: false, error: result.error.message };
      }

      if (result.paymentIntent.status === "succeeded") {
        return { success: true };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      setIsProcessing(false);
    }
  };

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
        handlePayment,
        stripeComplete,
        setStripeComplete,
        isProcessing,
        setIsProcessing,
      }}
    >
      {children}
    </SubscriptionPaymentContext.Provider>
  );
};
