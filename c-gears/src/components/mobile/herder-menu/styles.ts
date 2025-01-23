import styled from "styled-components";

export const StyledHeaderMenuList = styled.ul`
  display: none;
  align-items: flex-end;

  position: fixed;

  gap: 20px;
  top: 100px;
  right: 0;

  padding: 0 20px;

  height: fit-content;

  @media (max-width: 1107px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    animation: cascadeAnimation 0.9s ease-in-out;
  }

  @media (max-height: 575px) {
    margin-top: -20px;
  }

  @keyframes cascadeAnimation {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .menu-item--mobile {
    display: flex;
    align-items: center;

    width: fit-content;
    height: 100%;

    position: relative;

    p {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      padding-bottom: 15px;

      color: var(--Gray-6);

      position: relative;

      @media (max-height: 1138px) {
        font-size: 16px;
      }

      @media (max-height: 1024px) {
        font-size: 15px;
      }

      @media (max-height: 740px) {
        font-size: 12px;
      }

      @media (max-height: 480px) {
        font-size: 10px;
        padding-bottom: 5px;
      }
    }

    :hover {
      cursor: pointer;
      color: var(--Red-9);
      transition: 0.9s;
    }

    p::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 1px;
      background-color: var(--Red-9);
      transition: width 0.9s;
    }
  }
  .menu-item--mobile:hover p::after {
    width: 70%;
  }

  @media (max-height: 533px) {
    gap: 10px;
  }

  @media (max-height: 360px) {
    gap: 5px;
  }
`;
