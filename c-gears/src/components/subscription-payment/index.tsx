import { IoCloseOutline } from "react-icons/io5";
import { StyledSubscriptionPayment } from "./styles";
import { useSubscriptionPaymentContext } from "../../contexts/subscription-payment-context/hook";
import { MethodCreditDebitForm } from "./forms/MethodCreditDebitForm";

const SubscriptionPayment = () => {
  const {
    IsSubscriptionPayment,
    setIsSubscriptionPayment,
    activePayment,
    setActivePayment,
  } = useSubscriptionPaymentContext();

  return (
    <StyledSubscriptionPayment>
      <div className="subscription-payment--container">
        <div className="subscription-payment--header">
          <h5 className="subscription-payment--title">Subscription Payment</h5>
          <IoCloseOutline
            className="subscription-payment--icon-close"
            onClick={() => setIsSubscriptionPayment(!IsSubscriptionPayment)}
          />
        </div>
        <div className="subscription-payment-text--container">
          <p className="subscription-payment--text">Your payment method</p>
        </div>
        <div className="subscription-payment-methods-btn--container">
          <button
            className={`subscription-payment-method-btn--credit-debit ${
              activePayment === "creditDebit" ? "active" : ""
            }`}
            type="button"
            onClick={() => setActivePayment("creditDebit")}
            tabIndex={0}
          >
            Credit/Debit Card
          </button>
          <button
            className="subscription-payment-method-btn--paypal"
            type="button"
            onClick={() => setActivePayment("paypal")}
            tabIndex={0}
          >
            <img className="svg-paypal" src="paypal.svg" />
          </button>
          <button
            className="subscription-payment-method-btn--more-method"
            type="button"
          >
            More Methods
          </button>
        </div>
        {activePayment === "creditDebit" && <MethodCreditDebitForm />}
        {activePayment === "paypal" && (
          <div className="subscription-payment-paypal--container"></div>
        )}
      </div>
    </StyledSubscriptionPayment>
  );
};

export default SubscriptionPayment;
