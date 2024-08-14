import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;

  .logo--container {
    display: flex;
    align-items: center;

    gap: 10px;

    width: fit-content;
    height: 100%;

    margin-left: 20px;

    .logo-image {
      width: 70px;
      height: 70px;

      @media (max-width: 1727px) {
        width: 60px;
        height: 60px;
      }

      @media (max-width: 1454px) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: 400px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  .menu-list {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1270px;
    height: 100%;

    @media (max-width: 1107px) {
      display: none;
    }

    .menu-item {
      display: flex;
      align-items: center;

      padding: 0 20px;

      width: fit-content;
      height: fit-content;

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

        @media (max-width: 1280px) {
          font-size: 12px;
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
        left: 0;
        bottom: 0;
        width: 10px;
        height: 1px;
        background-color: var(--Red-9);
        transition: width 0.9s;
      }
    }
  }

  .menu-item:hover p::after {
    width: 70%;
  }

  .menu--register-play-login {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 300px;
    height: 35px;

    margin-right: 20px;

    @media (max-width: 1107px) {
      justify-content: flex-end;
      gap: 90px;
      width: 700px;
      margin-right: 0;
    }

    @media (max-width: 900px) {
      width: 600px;
    }

    @media (max-width: 537px) {
      gap: 50px;
    }

    @media (max-width: 480px) {
      width: 200px;
      gap: 50px;
    }

    @media (max-width: 400px) {
      width: 200px;
      gap: 20px;
    }

    .btn-register-play {
      display: flex;
      justify-content: center;
      align-items: center;
      border-style: none;

      font-family: "Orbitron";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      width: fit-content;
      height: 35px;

      border-radius: 5px;
      background: var(--Gray-6);
      color: var(--Red-9);

      @media (max-width: 1280px) {
        font-size: 12px;
      }

      @media (max-width: 537px) {
        font-size: 10px;
        height: 30px;
      }
    }

    .btn-register-play:hover {
      cursor: pointer;
      color: var(--Gray-0);
      background: var(--Red-9);
      transition: 0.9s;
    }

    .login {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;

      color: var(--Red-9);

      @media (max-width: 1280px) {
        font-size: 14px;
      }

      @media (max-width: 400px) {
        font-size: 12px;
      }

      @media (max-width: 537px) {
        font-size: 10px;
      }
    }

    .login:hover {
      cursor: pointer;
      color: var(--Gray-6);
      transition: 0.9s;
    }
  }

  .icon-option--container {
    display: none;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    margin-right: 20px;

    color: var(--Gray-6);

    :hover {
      cursor: pointer;
      color: var(--Red-9);
      transition: 0.9s;
    }

    @media (max-width: 1107px) {
      display: flex;
    }

    @media (max-width: 800px) {
      padding-left: 50px;
    }

    @media (max-width: 480px) {
      padding-left: 30px;
      font-size: 16px;
    }
  }
`;
