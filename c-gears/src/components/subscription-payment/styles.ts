import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const StyledSubscriptionPayment = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);

  animation: ${fadeInDown} 0.4s ease-out forwards;

  & > div {
    animation: ${fadeInDown} 0.6s ease-out forwards;
  }

  .subscription-payment--container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 90%;
    max-height: 90vh;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    border-radius: 5px;

    padding-right: 5px;

    animation: ${fadeInDown} 0.4s ease-out forwards;

    & > div {
      animation: ${fadeInDown} 0.6s ease-out forwards;
    }

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background: var(--Gray-9);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--Indigo-9);
      border-radius: 10px;
    }

    @media (min-width: 800px) {
      width: 750px;
    }

    .subscription-payment--header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 30px;

      margin-top: 5px;
      border-bottom: 1px solid var(--Gray-6);

      .subscription-payment--title {
        font-size: 13px;
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--Gray-0);

        margin-left: 8px;

        @media (min-width: 462px) {
          font-size: 14px;
          margin-left: 10px;
        }

        @media (min-width: 550px) {
          margin-left: 12px;
        }

        @media (min-width: 650px) {
          margin-left: 15px;
        }

        @media (min-width: 800px) {
          margin-left: 18px;
        }
      }

      .subscription-payment--icon-close {
        font-size: 20px;
        color: var(--Gray-0);
        cursor: pointer;

        margin-right: 10px;
      }
    }

    .subscription-payment-text--container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: fit-content;

      margin-top: 10px;

      .subscription-payment--text {
        font-size: 10px;
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1px;

        color: var(--Gray-0);

        margin-left: 8px;

        @media (min-width: 462px) {
          font-size: 12px;
          margin-left: 10px;
        }

        @media (min-width: 550px) {
          margin-left: 12px;
        }

        @media (min-width: 650px) {
          margin-left: 15px;
        }

        @media (min-width: 800px) {
          margin-left: 18px;
        }
      }
    }

    .subscription-payment-methods-btn--container {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: fit-content;

      gap: 15px;
      margin-top: 15px;
      margin-left: 10px;

      @media (min-width: 462px) {
        justify-content: flex-start;
        width: 95%;
        gap: 15px;
        flex-direction: row;
        margin-left: 0;
      }

      .subscription-payment-method-btn--credit-debit,
      .subscription-payment-method-btn--paypal,
      .subscription-payment-method-btn--more-method {
        display: flex;
        justify-content: center;
        align-items: center;

        width: fit-content;
        height: 30px;

        background: var(--Gray-9);

        font-family: "orbitron";
        font-weight: 300;
        font-size: 10px;
        text-align: center;
        letter-spacing: 1px;

        border-style: none;
        border-radius: 3px;

        color: var(--Gray-0);
        transition: 0.8s;

        cursor: pointer;

        @media (min-width: 462px) {
          height: 35px;
        }

        @media (min-width: 550px) {
          font-size: 12px;
        }
      }

      .subscription-payment-method-btn--paypal .svg-paypal {
        transition: 0.8s;

        width: 80px;
        height: 80px;

        @media (min-width: 462px) {
          width: 90px;
          height: 90px;
        }
      }
    }

    .subscription-payment-method-btn--credit-debit:hover,
    .subscription-payment-method-btn--paypal:hover,
    .subscription-payment-method-btn--more-method:hover {
      background: var(--Gray-8);
    }

    .subscription-payment-method-btn--credit-debit:focus,
    .subscription-payment-method-btn--paypal:focus,
    .subscription-payment-method-btn--more-method:focus {
      border: 1px solid var(--Gray-6);
    }

    .subscription-payment-method-btn--credit-debit.active {
      border: 1px solid var(--Gray-6);
    }

    .subscription-payment-cards-svg--container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: 30px;

      gap: 3px;

      margin-top: 10px;
      margin-left: 10px;

      @media (min-width: 462px) {
        width: 95%;
        margin-left: 0;
      }

      @media (min-width: 550px) {
        margin-top: 15px;
      }

      .svg-card-visa,
      .svg-card-mastercard,
      .svg-card-amex,
      .svg-card-discover,
      .svg-card-elo {
        width: 35px;
        height: 35px;

        transition: 0.8s;

        @media (min-width: 550px) {
          width: 40px;
          height: 40px;
        }
      }
    }

    .subscription-payment-credit-debit--form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 95%;
      height: fit-content;

      margin-top: 15px;

      animation: ${fadeInDown} 0.4s ease-out forwards;

      & > div {
        animation: ${fadeInDown} 0.6s ease-out forwards;
      }

      .label-input-name-surname--container,
      .label-input-country-zipcode--container,
      .label-input-numberCard-expiration-cvc--container {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: fit-content;

        gap: 10px;
      }

      .label-input-country-zipcode--container,
      .label-input-numberCard-expiration-cvc--container {
        margin-top: 15px;
      }

      .label-input--container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        height: fit-content;

        gap: 5px;
      }

      .label-name,
      .label-surname,
      .label-country,
      .label-zipcode,
      .label-numberCard,
      .label-expiration,
      .label-cvc {
        display: flex;
        justify-content: flex-start;

        width: 100%;
        height: fit-content;

        margin-left: 5px;

        font-size: 10px;
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1px;

        color: var(--Gray-0);

        @media (min-width: 462px) {
          font-size: 12px;
        }
      }

      .input-icon-down--container,
      .input-iconCard-numberCard--container,
      .input-cvc-iconLock--container {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 28px;

        background: var(--Gray-9);
        border: 1px solid transparent;
        border-radius: 3px;

        gap: 5px;

        @media (min-width: 462px) {
          height: 33px;
        }
      }

      .countries-icon-down {
        color: var(--Gray-0);
        margin-right: 5px;
        transition: transform 0.2s ease;
        transform: rotate(0deg);
      }

      .countries-icon-down.rotate {
        transform: rotate(180deg);
      }

      .icon-creditCard,
      .icon-lock {
        margin-left: 5px;
        color: var(--Gray-0);
      }

      .icon-lock {
        margin-right: 5px;
      }

      .input-name,
      .input-surname,
      .input-country,
      .input-zipcode,
      .input-numberCard,
      .input-expiration,
      .input-cvc {
        width: 100%;
        height: 30px;

        background: var(--Gray-9);
        box-sizing: border-box;
        border-radius: 3px;
        text-indent: 5px;
        outline: none;
        border-style: none;

        font-size: 10px;
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1px;

        color: var(--Gray-4);

        @media (min-width: 462px) {
          height: 35px;
        }
      }

      .input-country {
        font-size: 7px;

        @media (min-width: 462px) {
          font-size: 10px;
        }
      }

      .input-name::placeholder,
      .input-surname::placeholder,
      .input-country::placeholder,
      .input-zipcode::placeholder,
      .input-numberCard::placeholder,
      .input-expiration::placeholder,
      .input-cvc::placeholder {
        color: var(--Gray-6);
        font-size: 8px;

        @media (min-width: 462px) {
          font-size: 10px;
        }
      }

      .input-name:focus,
      .input-surname:focus,
      .input-zipcode:focus,
      .input-expiration:focus {
        border: 1px solid var(--Ocean-blue-8);
        background: var(--Black-0);
      }

      .input-country:focus,
      .input-numberCard:focus,
      .input-cvc:focus {
        background: transparent;
      }

      .input-icon-down--container:focus-within,
      .input-iconCard-numberCard--container:focus-within,
      .input-cvc-iconLock--container:focus-within {
        border: 1px solid var(--Ocean-blue-8);
        background: var(--Black-0);
      }

      .disclaimers-text--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: fit-content;

        gap: 10px;

        margin-top: 15px;
        border-top: 1px solid var(--Gray-6);

        .disclaimers-text {
          font-size: 8px;
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--Gray-6);

          text-align: start;

          margin-top: 10px;

          @media (min-width: 462px) {
            font-size: 10px;
          }
        }

        a {
          font-size: 10px;
          text-decoration: none;
          font-weight: 900;

          color: var(--Indigo-9);

          @media (min-width: 462px) {
            font-size: 11px;
          }
        }

        a i .icon-blank {
          font-size: 10px;

          @media (min-width: 462px) {
            font-size: 11px;
          }
        }

        .checkbox-disclaimers-container {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: fit-content;

          gap: 5px;

          border-bottom: 1px solid var(--Gray-6);

          .checkbox-icon {
            font-size: 50px;

            color: var(--Indigo-9);
            cursor: pointer;

            @media (min-width: 462px) {
              font-size: 60px;
            }

            @media (min-width: 550px) {
              font-size: 40px;
            }

            @media (min-width: 650px) {
              font-size: 30px;
            }
          }
        }

        .checkbox-disclaimers-container .disclaimers-text {
          margin-top: 0;
          padding: 10px;
        }
      }

      .price-total--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        width: 100%;
        height: fit-content;

        gap: 10px;

        margin-top: 15px;

        .price-text,
        .total-text {
          font-size: 10px;
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          letter-spacing: 1px;

          @media (min-width: 462px) {
            font-size: 12px;
          }
        }

        .price-text {
          color: var(--Gray-6);
        }

        .total-text {
          color: var(--Gray-0);
        }
      }

      .pay-now-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 30px;

        font-family: "orbitron";
        font-weight: 600;
        font-size: 14px;
        text-align: center;

        border-style: none;
        border-radius: 3px;
        margin-top: 15px;
        margin-bottom: 15px;

        background: var(--Indigo-9);
        color: var(--Gray-0);
        transition: 0.8s;

        cursor: pointer;

        @media (min-width: 462px) {
          font-size: 16px;
          height: 35px;
        }

        @media (min-width: 800px) {
          height: 40px;
        }
      }
    }
  }
`;
