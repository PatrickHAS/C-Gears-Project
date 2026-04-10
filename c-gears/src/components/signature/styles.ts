import styled from "styled-components";

export const StyledSignature = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  position: absolute;

  background:
    radial-gradient(
      150% 150% at top center,
      var(--Ocean-blue-8) 10%,
      transparent 30%
    ),
    var(--Black-0);

  .to-go-back--container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: fit-content;

    margin-top: 8px;

    @media (min-width: 1000px) {
      margin-top: 15px;
    }

    .to-go-back--icon {
      font-size: 20px;
      color: var(--Gray-0);

      margin-right: 8px;

      cursor: pointer;

      @media (min-width: 600px) {
        font-size: 30px;
      }
    }
  }

  .logo-gc-premium--container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 120px;

    margin-top: 20px;

    @media (min-width: 400px) {
      height: 140px;
    }

    @media (min-width: 600px) {
      margin-top: 10px;
    }

    @media (min-width: 1000px) {
      margin-top: 50px;
    }

    .logo-gc-premium {
      width: 220px;
      height: 100%;

      @media (min-width: 400px) {
        width: 250px;
      }

      @media (min-width: 600px) {
        width: 300px;
        height: 110%;
      }
    }
  }

  .signature-text--container,
  .signature-price-text--container,
  .btn-go-premium--container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: fit-content;

    @media (min-width: 1000px) {
      margin-top: 30px;
    }
  }

  .signature-text,
  .signature-price-text {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1px;

    color: var(--Gray-0);

    @media (min-width: 600px) {
      width: 600px;
      height: fit-content;

      font-size: 30px;
      line-height: 40px;
    }
  }

  span {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;

    color: var(--Gray-4);

    @media (min-width: 600px) {
      font-size: 12px;
    }
  }

  .signature-price-text--container {
    margin-top: 30px;
  }

  .btn-go-premium--container {
    margin-top: 30px;
  }

  .btn-go-premium {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 30px;

    font-family: "orbitron";
    font-weight: 600;
    font-size: 14px;
    text-align: center;

    border-style: none;
    border-radius: 3px;

    background: var(--Green-7);
    color: var(--Gray-9);
    transition: 0.8s;

    cursor: pointer;

    @media (min-width: 600px) {
      width: 200px;
      height: 50px;

      font-size: 16px;
    }
  }
`;
