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

    width: 274px;
    height: 100%;

    margin-left: 20px;

    /* .logo-name {
      font-family: "Orbitron";
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      line-height: 28px;

      color: var(--Red-9);

      @media (max-width: 1764px) {
        font-size: 16px;
      }

      @media (max-width: 1727px) {
        font-size: 18px;
      }

      @media (max-width: 1482px) {
        font-size: 15px;
      }

      @media (max-width: 1454px) {
        font-size: 16px;
      }

      @media (max-width: 1306px) {
        font-size: 15px;
      }

      @media (max-width: 1280px) {
        font-size: 14px;
      }

      @media (max-width: 1131px) {
        font-size: 13px;
      }

      @media (max-width: 400px) {
        font-size: 12px;
      }
    } */

    @media (max-width: 537px) {
      width: 250px;
    }

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

      @media (max-width: 1280px) {
        width: 40px;
        height: 40px;
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

  .menu--search-login {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 356px;
    height: 35px;

    margin-right: 20px;

    @media (max-width: 1107px) {
      justify-content: flex-end;
      gap: 90px;
      width: 300px;
    }

    @media (max-width: 480px) {
      width: 200px;
      gap: 50px;
    }

    @media (max-width: 400px) {
      width: 100px;
      gap: 20px;
    }

    .icon-search--container {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 36px;
      height: 35px;

      border-radius: 50%;
      background: var(--Gray-6);

      @media (max-width: 1280px) {
        width: 32px;
        height: 31px;
        font-size: 14px;
      }

      @media (max-width: 480px) {
        width: 25px;
        height: 24px;
        font-size: 12px;
      }
    }

    .icon-search--container:hover {
      cursor: pointer;
      color: var(--Gray-9);
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
