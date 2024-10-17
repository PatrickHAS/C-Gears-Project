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

        .logo-login {
          width: 40px;
          height: 40px;
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

        width: 90%;
        height: fit-content;
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
