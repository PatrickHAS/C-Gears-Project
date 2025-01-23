import styled from "styled-components";

export const StyledModalSetup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
  border: 1px solid var(--Gray-6);
  border-radius: 5px;

  width: 190px;
  height: fit-content;

  margin-top: 5px;

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

  .modal--user-settings,
  .modal--signatures,
  .modal--support {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 30px;

    cursor: pointer;
  }

  .container--icon-gear,
  .container--icon-star,
  .container--icon-support {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 100%;
  }

  .icon-gear,
  .icon-star,
  .icon-support {
    font-size: 16px;
    color: var(--Gray-0);
  }

  .title-settings,
  .title-signatures,
  .title-support {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;

    color: var(--Gray-0);
  }

  .modal--exit {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 30px;

    cursor: pointer;

    @media (min-width: 1107px) {
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
      }
    }

    .title-exit {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;

      color: var(--Gray-0);
    }
  }

  .modal--user-settings:hover {
    background: var(--Gray-0);
    transition: 0.9s;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .icon-gear {
      color: var(--Black-0);
      transition: 0.7s;
    }

    .title-settings {
      color: var(--Black-0);
    }
  }

  .modal--signatures:hover {
    background: var(--Gray-0);
    transition: 0.9s;

    .icon-star {
      color: var(--Black-0);
      transition: 0.7s;
    }

    .title-signatures {
      color: var(--Black-0);
    }
  }

  .modal--support:hover {
    background: var(--Gray-0);
    transition: 0.9s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .icon-support {
      color: var(--Black-0);
      transition: 0.7s;
    }

    .title-support {
      color: var(--Black-0);
    }

    @media (max-width: 1107px) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .modal--exit:hover {
    background: var(--Gray-0);
    transition: 0.9s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .icon-exit {
      color: var(--Black-0);
      transition: 0.7s;
    }

    .title-exit {
      color: var(--Black-0);
    }
  }
`;
