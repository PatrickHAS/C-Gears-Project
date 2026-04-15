import { TiArrowBack } from "react-icons/ti";
import { StyledSignature } from "./styles";
import { useSignatureContext } from "../../contexts/signature-context/hook";
import { useSubscriptionPaymentContext } from "../../contexts/subscription-payment-context/hook";

const Signature = () => {
  const { IsSignature, setIsSignature } = useSignatureContext();
  const { IsSubscriptionPayment, setIsSubscriptionPayment } =
    useSubscriptionPaymentContext();

  return (
    <StyledSignature>
      <div className="to-go-back--container">
        <div className="to-go-back--icon" title="To go back">
          <TiArrowBack
            className="to-go-back--icon"
            onClick={() => setIsSignature(!IsSignature)}
          />
        </div>
      </div>
      <div className="logo-gc-premium--container">
        <img
          className="logo-gc-premium"
          src="gc-premium.png"
          alt="Logo GC Premium"
        />
      </div>
      <div className="signature-text--container">
        <h1 className="signature-text">
          Participate in high-level competitive matches with GEARS CLUB Premium.
        </h1>
      </div>
      <div className="signature-price-text--container">
        <h2 className="signature-price-text">$ 5.99/month</h2>
        <span>
          Billed monthly, excluding taxes.
          <br /> • Cancel anytime.
        </span>
      </div>
      <div className="btn-go-premium--container">
        <button
          className="btn-go-premium"
          type="button"
          onClick={() => {
            setIsSubscriptionPayment(!IsSubscriptionPayment);
          }}
        >
          Go Premium
        </button>
      </div>
    </StyledSignature>
  );
};
export default Signature;
