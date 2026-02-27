import styled from "styled-components";

export const StyledConfirmCodeModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  .box-card-confirm-code {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 304px;
    height: 254px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    @media (min-width: 500px) {
      width: 404px;
    }

    @media (min-width: 1000px) {
      width: 604px;
    }

    .card-confirm-code {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 300px;
      height: 250px;

      background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
      position: relative;

      overflow: hidden;
      border-radius: 5px;

      @media (min-width: 500px) {
        width: 400px;
      }

      @media (min-width: 1000px) {
        width: 600px;
      }

      .header-confirm-code {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        height: 50px;
        margin-top: 5px;

        .logo-confirm-code {
          width: 40px;
          height: 40px;
        }

        .text-confirm-code {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;

          line-height: 20px;
          color: var(--Gray-0);
        }

        .icon-close-confirm-code {
          font-size: 20px;
          color: var(--Gray-0);
        }

        .icon-close-confirm-code:hover {
          cursor: pointer;
          color: var(--Red-6);
          transition: 0.9s;
        }

        @media (min-width: 1000px) {
          .logo-confirm-code {
            width: 50px;
            height: 50px;
          }

          .text-confirm-code {
            font-size: 15px;
          }

          .icon-close-confirm-code {
            font-size: 25px;
          }
        }
      }

      .form-confirm-code {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 150px;

        margin-top: 15px;

        .code-input--container {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 10px;

          @media (min-width: 1000px) {
            gap: 20px;
          }

          .code-input {
            width: 30px;
            height: 40px;

            background: transparent;
            border: 1px solid var(--Gray-6);
            color: var(--Gray-0);
            border-radius: 7px;

            outline: none;
            text-align: center;
            font-size: 18px;
            font-family: "Orbitron";
            transition: 0.3s;

            @media (min-width: 1000px) {
              width: 40px;
              height: 50px;
            }
          }
        }

        .btn-confirm-code {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100px;
          height: 38px;
          margin-top: 20px;

          background: var(--Indigo-9);
          color: var(--Gray-0);

          box-sizing: border-box;
          border-radius: 5px;
          border: none;

          font-family: "Orbitron";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 0px;

          @media (min-width: 1000px) {
            width: 120px;
            height: 40px;
          }
        }

        .btn-confirm-code:hover {
          cursor: pointer;
          background: var(--Red-9);
          transition: 0.9s;
        }
      }
      p {
        font-family: "Orbitron";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 20px;
        color: var(--Gray-0);

        @media (min-width: 1000px) {
          font-size: 12px;
        }
      }
    }
  }

  .box-card-confirm-code::before {
    content: "";
    width: 200px;
    height: 200%;

    position: absolute;
    background: linear-gradient(
      to bottom,
      var(--Red-9) 50%,
      var(--Indigo-9) 50%
    );
    border-radius: inherit;

    animation: animate 30s linear infinite;

    @media (min-width: 1000px) {
      width: 220px;
      height: 300%;
    }
  }

  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
