import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  .card-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    width: 400px;
    height: 500px;
    overflow: hidden;
    border-radius: 5px;

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

  .card-login span:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--Red-9));
    animation: anima1 10s linear infinite;
  }

  @keyframes anima1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .card-login span:nth-of-type(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--Red-9));
    animation: anima2 10s linear infinite;
    animation-delay: 5s;
  }

  @keyframes anima2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  .card-login span:nth-of-type(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, transparent, var(--Red-9));
    animation: anima3 10s linear infinite;
  }

  @keyframes anima3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .card-login span:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, transparent, var(--Red-9));
    animation: anima4 10s linear infinite;
    animation-delay: 5s;
  }

  @keyframes anima4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
