import styled from "styled-components";

export const StyledPasswordReset = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  .box-card-passreset {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 562px;
    height: 385px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 600px) {
      width: 462px;
    }

    @media (max-width: 500px) {
      width: 362px;
    }

    @media (max-width: 400px) {
      width: 312px;
    }

    @media (max-width: 350px) {
      width: 292px;
    }
  }

  .card-passreset {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 560px;
    height: 383px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    position: relative;

    overflow: hidden;
    border-radius: 5px;

    @media (max-width: 600px) {
      width: 460px;
    }

    @media (max-width: 500px) {
      width: 360px;
    }

    @media (max-width: 400px) {
      width: 310px;
    }

    @media (max-width: 350px) {
      width: 290px;
    }

    .header-passreset {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 90%;
      height: 50px;
      margin-top: 5px;

      .logo-passreset {
        width: 40px;
        height: 40px;
      }

      .title-passreset {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;

        line-height: 20px;
        color: var(--Gray-0);
      }

      .icon-close-passreset {
        font-size: 20px;
        color: var(--Gray-0);
      }

      .icon-close-passreset:hover {
        cursor: pointer;
        color: var(--Red-6);
        transition: 0.9s;
      }
    }

    .form-passreset {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;

      width: 80%;
      height: fit-content;

      margin-top: 15px;

      .label-errors {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        height: 10px;

        p {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 17px;

          color: var(--Gray-4);
        }
      }

      input {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        height: 48px;

        margin: 10px;

        background: var(--Gray-3);
        border: 2px solid transparent;
        border-radius: 2px;
        box-sizing: border-box;
        text-indent: 10px;
        outline: none;
      }

      .input-email:hover {
        cursor: pointer;
        border: 2px solid var(--Red-9);
        box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
        transition: 0.9s;
      }

      .input-emailConfirm:hover {
        cursor: pointer;
        border: 2px solid var(--Indigo-9);
        box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
        transition: 0.9s;
      }

      .input-email:focus {
        border: 2px solid var(--Red-9);
        box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
      }

      .input-emailConfirm:focus {
        border: 2px solid var(--Indigo-9);
        box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
      }

      input::placeholder {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 0px;

        color: var(--Gray-8);
      }

      .btn-golink {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 48px;
        margin: 10px;

        background: var(--Indigo-9);
        color: var(--Gray-0);

        box-sizing: border-box;
        border-radius: 2px;
        border: none;

        font-family: "Orbitron";
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 0px;

        @media (min-height: 500px) {
          font-size: 12px;
        }
      }
    }

    .btn-golink:hover {
      cursor: pointer;
      background: var(--Red-9);
      transition: 0.9s;
    }

    footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      gap: 15px;
      margin-top: 20px;

      .logo-cgo {
        width: 55px;
      }

      .logo-locust {
        width: 40px;
      }

      @media (max-height: 360px) {
        margin-top: 20px;

        .logo-cgo {
          width: 35px;
        }

        .logo-locust {
          width: 20px;
        }
      }
    }
  }

  .box-card-passreset::before {
    content: "";
    width: 250px;
    height: 300%;

    position: absolute;
    background: linear-gradient(
      to bottom,
      var(--Red-9) 50%,
      var(--Indigo-9) 50%
    );
    border-radius: inherit;

    animation: animate 30s linear infinite;
  }

  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
