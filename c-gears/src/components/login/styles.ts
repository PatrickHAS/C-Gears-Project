import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  .box-card-login {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 402px;
    height: 452px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 430px) {
      width: 90%;
    }

    .card-login {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 400px;
      height: 450px;

      background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
      position: relative;

      overflow: hidden;
      border-radius: 5px;

      @media (max-width: 430px) {
        width: 99%;
      }

      .header-login {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        height: 50px;
        margin-top: 5px;

        .logo-login {
          width: 40px;
          height: 40px;
        }

        .text-login {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;

          line-height: 20px;
          color: var(--Gray-0);
        }

        .icon-close-login {
          font-size: 20px;
          color: var(--Gray-0);
        }

        .icon-close-login:hover {
          cursor: pointer;
          color: var(--Red-6);
          transition: 0.9s;
        }
      }

      .form-login {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        width: 80%;
        height: fit-content;

        margin-top: 15px;

        .register {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;
          margin-bottom: 10px;

          p {
            font-family: "Orbitron";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;

            color: var(--Gray-4);
          }

          span {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;

            margin-left: 5px;
            color: blue;
          }

          span:hover {
            cursor: pointer;
            color: var(--Indigo-9);
            transition: 0.9s;
          }
        }

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
          border-radius: 6px;
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

        .input-password:hover {
          cursor: pointer;
          border: 2px solid var(--Indigo-9);
          box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          transition: 0.9s;
        }

        .input-email:focus {
          border: 2px solid var(--Red-9);
          box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
        }

        .input-password:focus {
          border: 2px solid var(--Indigo-9);
          box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
        }

        input::placeholder {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 0px;

          color: var(--Gray-8);
        }

        .forgot-password {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          width: 100%;
          margin-top: 5px;

          p {
            font-family: "Orbitron";
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 24px;

            color: red;
          }

          p:hover {
            cursor: pointer;
            color: var(--Red-9);
            transition: 0.9s;
          }
        }

        .btn-enter {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 48px;
          margin: 10px;

          background: var(--Indigo-9);
          color: var(--Gray-0);

          box-sizing: border-box;
          border-radius: 4px;
          border: none;

          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 0px;
        }

        .btn-enter:hover {
          cursor: pointer;
          background: var(--Red-9);
          transition: 0.9s;
        }

        footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          gap: 15px;
          margin-top: 40px;

          .logo-cgo {
            width: 55px;
          }

          .logo-locust {
            width: 40px;
          }
        }
      }
    }
  }

  .box-card-login::before {
    content: "";
    width: 350px;
    height: 300%;

    position: absolute;
    background: linear-gradient(
      to bottom,
      var(--Red-9) 50%,
      var(--Indigo-9) 50%
    );
    border-radius: inherit;

    animation: animate 30s linear infinite;

    @media (max-width: 430px) {
      width: 300px;
    }

    @media (max-width: 350px) {
      width: 250px;
    }
  }

  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
