import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  #background-video {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    #background-video {
      display: none;
    }

    &::before {
      content: "";
      background: url("/goweday.jpg") no-repeat center center;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;
