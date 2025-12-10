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

        @media (max-height: 700px) {
          width: 50px;
          height: 50px;
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
        font-size: 10px;
        line-height: 20px;

        color: var(--Gray-0);

        @media (min-width: 470px) {
          font-size: 14px;
        }

        @media (min-width: 900px) {
          font-size: 16px;
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
    justify-content: space-around;

    width: 100%;
    height: 650px;

    margin-top: 10px;

    @media (min-width: 560px) {
      width: 90%;
    }

    @media (min-width: 570px) {
      width: 80%;
    }

    @media (min-width: 750px) {
      width: 70%;
    }

    @media (min-width: 1000px) {
      width: 100%;
      justify-content: center;
      margin-top: 20px;
      gap: 50px;
    }

    .options-settings {
      display: flex;
      flex-direction: column;

      width: 140px;
      height: fit-content;

      background: var(--Gray-1);
      border-radius: 5px;

      @media (min-width: 471px) {
        width: 180px;
      }

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
            font-size: 12px;
            color: linear-gradient(to right, var(--Black-0), var(--Gray-8));
            transition: color 0.7s;
            padding: 5px;

            @media (min-width: 471px) {
              font-size: 16px;
            }
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
          font-size: 8px;
          line-height: 20px;

          color: linear-gradient(to right, var(--Black-0), var(--Gray-8));
          transition: color 0.7s;

          padding: 5px;

          @media (min-width: 471px) {
            font-size: 10px;
          }

          @media (min-width: 1000px) {
            font-size: 12px;
          }
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

    .user-data--content,
    .user-address--content,
    .change-email--content,
    .change-pass--content,
    .link-account--content {
      display: flex;
      justify-content: center;
      flex-direction: column;

      width: 150px;
      height: fit-content;

      @media (min-width: 471px) {
        width: 200px;
      }

      @media (min-width: 1000px) {
        width: 700px;
      }

      .title-my-data,
      .title-my-address,
      .title-change-email,
      .title-change-pass,
      .title-link-account {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 20px;

        text-align: start;

        @media (min-width: 471px) {
          font-size: 14px;
        }
      }

      .form-user-data,
      .form-user-address,
      .form-change-email,
      .form-change-pass,
      .form-link-account {
        display: flex;
        flex-wrap: wrap;

        width: 100%;
        height: fit-content;

        gap: 10px;

        border-radius: 5px;
        margin-top: 10px;

        .label-input--container {
          display: flex;
          flex-direction: column;

          width: 200px;
          height: fit-content;

          gap: 5px;

          label {
            font-family: "Orbitron";
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 17px;

            color: var(--Black-0);

            @media (min-width: 471px) {
              font-size: 12px;
            }
          }

          .input--container,
          .form-control {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: 90%;
            height: fit-content;

            background: var(--Gray-1);
            border: 1px solid var(--Gray-4);
            border-radius: 5px;

            @media (min-width: 471px) {
              width: 100%;
            }

            input {
              width: 100%;
              height: 30px;

              background: transparent;
              box-sizing: border-box;
              text-indent: 10px;
              outline: none;
              border-style: none;
              font-size: 10px;

              @media (min-width: 471px) {
                font-size: 12px;
              }
            }

            .icon-edit {
              padding: 5px;
              cursor: pointer;
            }
          }

          input.form-control {
            height: 32px;
            font-size: 8px;

            @media (min-width: 471px) {
              font-size: 12px;
            }
          }
        }

        ul.country-list {
          width: 150px;

          @media (min-width: 471px) {
            width: 200px;
          }

          @media (min-width: 700px) {
            width: 250px;
          }

          .search-box {
            width: 70%;
            height: 25px;

            @media (min-width: 700px) {
              width: 80%;
            }
          }

          .dial-code {
            font-size: 10px;

            @media (min-width: 700px) {
              font-size: 12px;
            }
          }

          .country-name {
            font-size: 10px;

            @media (min-width: 700px) {
              font-size: 12px;
            }
          }
        }

        .btn--save-change {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100px;
          height: 30px;

          background: var(--Gray-1);
          color: var(--Black-0);

          box-sizing: border-box;
          border-radius: 5px;
          border: 1px solid var(--Gray-4);

          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          font-size: 8px;
          line-height: 0px;

          @media (min-width: 471px) {
            width: 150px;
            height: 40px;
            font-size: 10px;
          }
        }

        .btn--save-change:hover {
          cursor: pointer;
          background: var(--Indigo-9);
          color: var(--Gray-1);
          transition: 0.9s;
        }
      }
    }
  }

  .options-settings .option-my-data.active .icon--container,
  .options-settings .option-my-address.active .icon--container,
  .options-settings .option-change-email.active .icon--container,
  .options-settings .option-change-password.active .icon--container,
  .options-settings .option-link-account.active .icon--container {
    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
  }

  .options-settings .option-my-data.active .icon--container {
    border-top-left-radius: 5px;
  }

  .options-settings .option-link-account.active .icon--container {
    border-bottom-left-radius: 5px;
  }

  .options-settings .option-my-data.active .icon--container .icon-my-data,
  .options-settings .option-my-address.active .icon--container .icon-my-address,
  .options-settings
    .option-change-email.active
    .icon--container
    .icon-change-email,
  .options-settings
    .option-change-password.active
    .icon--container
    .icon-change-password,
  .options-settings
    .option-link-account.active
    .icon--container
    .icon-link-account {
    color: var(--Gray-0);
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
