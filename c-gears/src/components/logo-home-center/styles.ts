import styled from "styled-components";

export const StyledLogoHomeCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  .logo-home-center {
    width: 500px;
    height: 500px;

    @media (max-width: 1727px) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: 700px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 500px) {
      width: 250px;
      height: 250px;
    }

    @media (max-height: 440px) {
      width: 200px;
      height: 200px;
    }
  }
`;
