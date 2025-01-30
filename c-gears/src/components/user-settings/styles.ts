import styled from "styled-components";

export const StyledUserSettings = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  background: var(--Gray-2);
  position: absolute;

  width: 100%;
  height: 100%;

  .header-settings--container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));

    @media (max-width: 470px) {
      justify-content: space-between;
    }

    .logo-gc--container {
      display: flex;
      align-items: center;

      width: fit-content;
      height: 100%;

      @media (max-width: 470px) {
        margin-left: 20px;
      }

      .logo-img {
        width: 90px;
        height: 90px;

        @media (max-width: 470px) {
          width: 60px;
          height: 60px;
        }
      }
    }

    .name-back--container {
      display: flex;
      align-items: center;

      width: fit-content;
      height: 100%;

      gap: 30px;

      @media (max-width: 470px) {
        margin-right: 20px;
      }

      .name {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        color: var(--Gray-0);

        @media (max-width: 470px) {
          font-size: 14px;
        }

        @media (max-width: 400px) {
          font-size: 12px;
        }

        @media (max-width: 350px) {
          font-size: 10px;
        }
      }

      .icon-back--container {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        width: fit-content;
        height: fit-content;

        .icon-back {
          font-size: 25px;
          color: var(--Gray-0);
        }

        .icon-back:hover {
          color: var(--Red-6);
          transition: 0.7s;
        }
      }
    }
  }

  .options-settings--container {
    display: flex;
    justify-content: space-between;

    width: 70%;
    height: 650px;

    .options-settings {
      display: flex;
      flex-direction: column;

      width: 200px;
      height: fit-content;

      background: var(--Gray-1);
      border-radius: 5px;

      .option-my-data,
      .option-my-address,
      .option-change-email,
      .option-change-password,
      .option-link-account {
        display: flex;
        align-items: center;

        width: 100%;
        height: 40px;

        cursor: pointer;

        .icon--container {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 40px;
          height: 100%;

          .icon-my-data,
          .icon-my-address,
          .icon-change-email,
          .icon-change-password,
          .icon-link-account {
            font-size: 20px;
            color: linear-gradient(to right, var(--Black-0), var(--Gray-8));
            transition: color 0.7s;
            padding: 5px;
          }
        }

        .text-my-data,
        .text-my-address,
        .text-change-email,
        .text-change-password,
        .text-link-account {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;

          color: linear-gradient(to right, var(--Black-0), var(--Gray-8));
          transition: color 0.7s;

          padding: 5px;
        }
      }
    }

    .option-my-data:hover,
    .option-my-address:hover,
    .option-change-email:hover,
    .option-change-password:hover,
    .option-link-account:hover {
      background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
      transition: color 0.7s;

      .icon--container {
        background: linear-gradient(to right, var(--Black-0), var(--Gray-8));

        .icon-my-data,
        .icon-my-address,
        .icon-change-email,
        .icon-change-password,
        .icon-link-account {
          color: var(--Gray-0);
        }
      }

      .text-my-data,
      .text-my-address,
      .text-change-email,
      .text-change-password,
      .text-link-account {
        color: var(--Gray-0);
      }
    }

    .option-my-data:focus,
    .option-my-address:focus,
    .option-change-email:focus,
    .option-change-password:focus,
    .option-link-account:focus {
      .icon--container {
        background: linear-gradient(to right, var(--Black-0), var(--Gray-8));

        .icon-my-data,
        .icon-my-address,
        .icon-change-email,
        .icon-change-password,
        .icon-link-account {
          color: var(--Gray-0);
        }
      }
    }

    .option-my-data:hover {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      .icon--container {
        border-top-left-radius: 5px;
      }
    }

    .option-link-account:hover {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      .icon--container {
        border-bottom-left-radius: 5px;
      }
    }

    .option-my-data:focus {
      .icon--container {
        border-top-left-radius: 5px;
      }
    }

    .option-link-account:focus {
      .icon--container {
        border-bottom-left-radius: 5px;
      }
    }
  }

  .footer-settings--container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 150px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));

    .footer-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 10px;

      width: fit-content;
      height: fit-content;

      .logo-gc-footer--container {
        display: flex;
        align-items: center;

        width: fit-content;
        height: fit-content;

        .logo-img-footer {
          width: 50px;
          height: 50px;
        }
      }

      .text-footer--container {
        display: flex;
        align-items: center;

        width: fit-content;
        height: fit-content;

        .text-footer {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;

          color: var(--Gray-0);

          @media (max-width: 400px) {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
