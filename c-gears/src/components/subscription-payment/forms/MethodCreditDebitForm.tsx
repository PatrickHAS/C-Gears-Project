import { FaCaretUp } from "react-icons/fa";
import { useSubscriptionPaymentContext } from "../../../contexts/subscription-payment-context/hook";
import { CiCreditCard2, CiLock } from "react-icons/ci";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useDropDownCountriesContext } from "../../../contexts/drop-down-countries-context/hook";
import DropDownCountries from "../../drop-down-countries";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useUserSettingsContext } from "../../../contexts/user-settings-context/hook";

export const MethodCreditDebitForm = () => {
  const {
    isCheckboxDisclaimers,
    setIsCheckboxDisclaimers,
    formData,
    handleChange,
    isButtonDisabled,
    handlePayment,
    setStripeComplete,
    isProcessing,
  } = useSubscriptionPaymentContext();
  const { isDropdownCountry, setIsDropdownCountry, country } =
    useDropDownCountriesContext();

  const { showToast } = useUserSettingsContext();

  const stripe = useStripe();
  const elements = useElements();

  const onPayNowClick = async () => {
    const result = await handlePayment(stripe, elements);

    if (result?.success) {
      showToast("success", "Gears Club Premium activated.");
    } else {
      showToast("error", result?.error || "Error processing payment.");
    }
  };

  const stripeElementOptions = {
    style: {
      base: {
        fontSize: "11px",
        color: "#ced4da",
        fontFamily: "Orbitron, sans-serif",
        fontWeight: "500",
        letterSpacing: "1px",
        "::placeholder": {
          color: "#868e96",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

  return (
    <>
      <div className="subscription-payment-cards-svg--container">
        <img className="svg-card-visa" src="visa.svg" />
        <img className="svg-card-mastercard" src="mastercard.svg" />
        <img className="svg-card-amex" src="amex.svg" />
        <img className="svg-card-discover" src="discover.svg" />
        <img className="svg-card-elo" src="elo.svg" />
      </div>
      <form className="subscription-payment-credit-debit--form">
        <div className="label-input-name-surname--container">
          <div className="label-input--container">
            <label className="label-name" id="name">
              First name
            </label>
            <input
              className="input-name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your first name"
              autoComplete="given-name"
            />
          </div>
          <div className="label-input--container">
            <label className="label-surname" id="surname">
              Last name
            </label>
            <input
              className="input-surname"
              id="surname"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your last name"
              autoComplete="family-name"
            />
          </div>
        </div>
        <div className="label-input-country-zipcode--container">
          <div className="label-input--container">
            <label className="label-country" id="country">
              Country
            </label>
            <div className="input-icon-down--container">
              <input
                className="input-country"
                id="country"
                type="text"
                value={country}
                onChange={handleChange}
                placeholder="Select your country"
                autoComplete="country-name"
              />
              <FaCaretUp
                className={`countries-icon-down ${isDropdownCountry ? "rotate" : ""}`}
                onClick={() => setIsDropdownCountry(!isDropdownCountry)}
              />
              {isDropdownCountry && <DropDownCountries />}
            </div>
          </div>
          <div className="label-input--container">
            <label className="label-zipcode" id="zipcode">
              Postal code/CEP
            </label>
            <input
              className="input-zipcode"
              id="zipcode"
              type="text"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="Enter your Zip/CEP code"
              autoComplete="postal-code"
            />
          </div>
        </div>
        <div className="label-input-numberCard-expiration-cvc--container">
          <div className="label-input--container">
            <label className="label-numberCard" id="numberCard">
              Card number
            </label>
            <div className="input-iconCard-numberCard--container">
              <CiCreditCard2 className="icon-creditCard" />
              <div className="input-numberCard-stripe">
                <CardNumberElement
                  id="numberCard"
                  options={stripeElementOptions}
                  onChange={(e) =>
                    setStripeComplete((prev) => ({
                      ...prev,
                      number: e.complete,
                    }))
                  }
                />
              </div>
              <CiLock className="icon-lock" />
            </div>
          </div>
        </div>
        <div className="label-input-numberCard-expiration-cvc--container">
          <div className="label-input--container">
            <label className="label-expiration" id="expiration">
              Expiration date
            </label>
            <div className="input-expiration-stripe">
              <CardExpiryElement
                id="expiration"
                options={stripeElementOptions}
                onChange={(e) =>
                  setStripeComplete((prev) => ({ ...prev, expiry: e.complete }))
                }
              />
            </div>
          </div>
          <div className="label-input--container">
            <label className="label-cvc" id="cvc">
              CVV/CVC
            </label>
            <div className="input-cvc-iconLock--container">
              <div className="input-cvc-stripe">
                <CardCvcElement
                  id="cvc"
                  options={stripeElementOptions}
                  onChange={(e) =>
                    setStripeComplete((prev) => ({ ...prev, cvc: e.complete }))
                  }
                />
              </div>
              <CiLock className="icon-lock" />
            </div>
          </div>
        </div>
        <div className="disclaimers-text--container">
          <span className="disclaimers-text">
            By clicking "PAY NOW", you acknowledge that you have read,
            understood and agreed to be bound by the{" "}
            <a target="_blank" href="https://stripe.com/legal/consumer">
              Terms of Service{" "}
              <i>
                <BsBoxArrowUpRight className="icon-blank" />
              </i>
            </a>
            ,{" "}
            <a target="_blank" href="https://stripe.com/privacy">
              Privacy Policy{" "}
              <i>
                <BsBoxArrowUpRight className="icon-blank" />
              </i>
            </a>{" "}
            and other applicable legal agreements of Stripe Inc. Your payment
            method will be saved by Stripe Inc for future purchases and, if
            applicable, for current subscription payments.
          </span>
          <div className="checkbox-disclaimers-container">
            {isCheckboxDisclaimers ? (
              <MdCheckBox
                className="checkbox-icon"
                onClick={() => setIsCheckboxDisclaimers(!isCheckboxDisclaimers)}
              />
            ) : (
              <MdCheckBoxOutlineBlank
                className="checkbox-icon"
                onClick={() => setIsCheckboxDisclaimers(!isCheckboxDisclaimers)}
              />
            )}
            <span className="disclaimers-text">
              By proceeding with the payment, you hereby request immediate
              performance of the agreement and acknowledge that you thereby lose
              your right of withdrawal.
            </span>
          </div>
        </div>
        <div className="price-total--container">
          <span className="price-text">Price: $ 6.00</span>
          <span className="total-text">Total: $ 6.00</span>
        </div>

        <button
          className="pay-now-btn"
          type="button"
          disabled={isButtonDisabled || isProcessing}
          style={{
            opacity: isButtonDisabled ? 0.5 : 1,
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
          }}
          onClick={onPayNowClick}
        >
          {isProcessing ? "PROCESSING..." : "PAY NOW"}
        </button>
      </form>
    </>
  );
};
