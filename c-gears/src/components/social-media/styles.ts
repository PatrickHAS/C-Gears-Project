import styled from "styled-components";

export const StyledSocialMedia = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;

  width: 100%;
  height: fit-content;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media (max-height: 580px) {
    margin-bottom: 0;
  }

  .banner--social-media {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 300px;
    margin-left: 20px;

    @media (max-width: 600px) {
      margin-left: 0;
      width: 100%;
    }

    .icon-discord,
    .icon-youtube,
    .icon-twitter,
    .icon-facebook,
    .icon-tiktok,
    .icon-twitch {
      width: fit-content;
      height: fit-content;
      font-size: 30px;
      color: white;
      padding: 10px;

      @media (max-width: 700px) {
        font-size: 20px;
      }

      @media (max-height: 440px) {
        font-size: 20px;
      }

      a {
        color: white;
        text-decoration: none;

        :hover {
          color: var(--Red-9);
          transition: 0.9s;
        }
      }
    }
  }

  .dowload-channel {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 200px;
    margin-right: 20px;

    @media (max-width: 600px) {
      position: relative;
      margin-right: 0;
      width: 100%;
      z-index: -1;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 5%;
        width: 90%;
        border-top: 1px solid var(--Gray-6);
      }
    }

    .icon-steam,
    .icon-xbox,
    .icon-microsoft_store {
      display: flex;
      justify-content: space-around;
      align-items: center;

      font-size: 30px;

      width: 50px;
      height: 50px;

      @media (max-width: 700px) {
        font-size: 20px;
      }

      @media (max-height: 440px) {
        font-size: 20px;
      }

      a {
        color: white;
        text-decoration: none;

        :hover {
          color: var(--Red-9);
          transition: 0.9s;
        }
      }
    }
  }
`;
