import { FaCaretUp } from "react-icons/fa";
import { useSubscriptionPaymentContext } from "../../../contexts/subscription-payment-context/hook";
import { useDropdownSetupContext } from "../../../contexts/drop-down-setup-context/hook";
import { CiCreditCard2, CiLock } from "react-icons/ci";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const MethodCreditDebitForm = () => {
  const {
    country,
    setCountry,
    countryOptions,
    isCheckboxDisclaimers,
    setIsCheckboxDisclaimers,
    formData,
    setFormData,
    handleChange,
    isButtonDisabled,
  } = useSubscriptionPaymentContext();
  const { isDropdownCountry, setIsDropdownCountry } = useDropdownSetupContext();

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
            <label className="label-name" htmlFor="name">
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
            <label className="label-surname" htmlFor="surname">
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
            <label className="label-country" htmlFor="country">
              Country
            </label>
            <div className="input-icon-down--container">
              <input
                className="input-country"
                id="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                placeholder="Select your country"
                autoComplete="country-name"
              />
              <FaCaretUp
                className={`countries-icon-down ${isDropdownCountry ? "rotate" : ""}`}
                onClick={() => setIsDropdownCountry(!isDropdownCountry)}
              />
            </div>
          </div>
          <div className="label-input--container">
            <label className="label-zipcode" htmlFor="zipcode">
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
            <label className="label-numberCard" htmlFor="numberCard">
              Card number
            </label>
            <div className="input-iconCard-numberCard--container">
              <CiCreditCard2 className="icon-creditCard" />
              <input
                className="input-numberCard"
                id="numberCard"
                type="text"
                value={formData.numberCard}
                onChange={handleChange}
                placeholder="1234 1234 1234 1234"
                autoComplete="cc-number"
              />
              <CiLock className="icon-lock" />
            </div>
          </div>
        </div>
        <div className="label-input-numberCard-expiration-cvc--container">
          <div className="label-input--container">
            <label className="label-expiration" htmlFor="expiration">
              Expiration date
            </label>
            <input
              className="input-expiration"
              id="expiration"
              type="text"
              value={formData.expiration}
              onChange={handleChange}
              placeholder="MM/YY"
              autoComplete="cc-exp"
            />
          </div>
          <div className="label-input--container">
            <label className="label-cvc" htmlFor="cvc">
              CVV/CVC
            </label>
            <div className="input-cvc-iconLock--container">
              <input
                className="input-cvc"
                id="cvc"
                type="text"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="CVC"
                autoComplete="cc-csc"
              />
              <CiLock className="icon-lock" />
            </div>
          </div>
        </div>
        <div className="disclaimers-text--container">
          <span className="disclaimers-text">
            By clicking "PAY NOW", you acknowledge that you have read,
            understood and agreed to be bound by the{" "}
            <a target="_blank" href="https://stripe.com/br/privacy">
              Terms of Service{" "}
              <i>
                <BsBoxArrowUpRight className="icon-blank" />
              </i>
            </a>
            ,{" "}
            <a target="_blank" href="https://stripe.com/br/privacy">
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
          <span className="price-text">Price: $ 5.99</span>
          <span className="total-text">Total: $ 5.99</span>
        </div>

        <button
          className="pay-now-btn"
          type="button"
          disabled={isButtonDisabled}
          style={{
            opacity: isButtonDisabled ? 0.5 : 1,
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
          }}
        >
          PAY NOW
        </button>
      </form>
    </>
  );
};
