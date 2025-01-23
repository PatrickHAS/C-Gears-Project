import Header from "../../components/header";
import backgroundVideo from "../../assets/gowe-day.mp4";
import { StyledHome } from "./styles";
import SocialMedia from "../../components/social-media";
import LogoHomeCenter from "../../components/logo-home-center";
import { useEffect, useState } from "react";
import { useHeaderContext } from "../../contexts/header-context";
import { useRegisterContext } from "../../contexts/register-context";
import Login from "../../components/login";
import Register from "../../components/register";
import { useEmailConfirmContext } from "../../contexts/email-confirm-context";
import EmailConfirm from "../../components/email-confirm";

const Home = () => {
  const { isLogin } = useHeaderContext();
  const { isRegister } = useRegisterContext();
  const { isEmailConfirm } = useEmailConfirmContext();
  const [isVideoPlayable, setIsVideoPlayable] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const video = document.getElementById(
        "background-video"
      ) as HTMLVideoElement;
      if (video) {
        if (window.innerWidth <= 1024) {
          video.pause();
          setIsVideoPlayable(false);
        } else {
          if (isVideoPlayable) {
            video.play();
          }
          setIsVideoPlayable(true);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVideoPlayable]);

  return (
    <StyledHome className="StyledHome">
      <video
        muted
        autoPlay
        loop
        id="background-video"
        style={{ display: window.innerWidth <= 1024 ? "none" : "flex" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isEmailConfirm && <EmailConfirm />}
      <LogoHomeCenter />
      <SocialMedia />
    </StyledHome>
  );
};

export default Home;
