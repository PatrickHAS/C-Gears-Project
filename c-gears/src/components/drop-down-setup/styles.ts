import styled from "styled-components";

export const StyledDropdownSetup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 100%;
  right: 0;

  background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
  border: 1px solid var(--Gray-6);
  border-radius: 5px;

  width: 190px;
  height: fit-content;

  margin-top: 5px;

  @media (max-width: 600px) {
    width: 100%;

    border-radius: 0;
    border-left: 0;
    border-right: 0;

    position: fixed;
    top: 68px;
    left: 0;

    z-index: 999;
  }

  transform-origin: top;
  animation: cascadeOpen 0.3s ease-out forwards;

  @keyframes cascadeOpen {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  .dropdown--user-settings,
  .dropdown--signatures,
  .dropdown--support,
  .dropdown--money {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 30px;

    background: transparent;
    transition: background 0.9s, border-radius 0.9s;

    cursor: pointer;
  }

  .container--icon-gear,
  .container--icon-star,
  .container--icon-support,
  .container--icon-money {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 100%;
  }

  .icon-gear,
  .icon-star,
  .icon-support,
  .icon-money {
    font-size: 16px;
    color: var(--Gray-0);
    transition: color 0.7s;
  }

  .title-settings,
  .title-signatures,
  .title-support,
  .money-wallet {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;

    color: var(--Gray-0);
    transition: color 0.7s;
  }

  .dropdown--exit {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 30px;

    background: transparent;
    transition: background 0.9s, border-radius 0.9s;

    cursor: pointer;

    @media (min-width: 1108px) {
      display: none;
    }

    .container--icon-exit {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 100%;

      .icon-exit {
        font-size: 16px;
        color: var(--Gray-0);
        transition: color 0.7s;
      }
    }

    .title-exit {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;

      color: var(--Gray-0);
      transition: color 0.7s;
    }
  }

  .dropdown--user-settings:hover,
  .dropdown--user-settings:focus {
    background: var(--Gray-0);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .icon-gear {
      color: var(--Black-0);
    }

    .title-settings {
      color: var(--Black-0);
    }

    @media (max-width: 600px) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  .dropdown--signatures:hover,
  .dropdown--signatures:focus {
    background: var(--Gray-0);

    .icon-star {
      color: var(--Black-0);
    }

    .title-signatures {
      color: var(--Black-0);
    }
  }

  .dropdown--support:hover,
  .dropdown--support:focus {
    background: var(--Gray-0);

    .icon-support {
      color: var(--Black-0);
    }

    .title-support {
      color: var(--Black-0);
    }
  }

  .dropdown--money:hover,
  .dropdown--money:focus {
    background: var(--Gray-0);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .icon-money {
      color: var(--Black-0);
    }

    .money-wallet {
      color: var(--Black-0);
    }

    @media (max-width: 1107px) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .dropdown--exit:hover {
    background: var(--Gray-0);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .icon-exit {
      color: var(--Black-0);
    }

    .title-exit {
      color: var(--Black-0);
    }

    @media (max-width: 600px) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
