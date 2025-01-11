import Header from "../../components/header";
import backgroundVideo from "../../assets/goweday.mp4";
import { StyledHome } from "./styles";
import SocialMedia from "../../components/social-media";
import LogoHomeCenter from "../../components/logo-home-center";
import { useEffect } from "react";
import { useHeaderContext } from "../../contexts/header-context";
import { useRegisterContext } from "../../contexts/register-context";
import Login from "../../components/login";
import Register from "../../components/register";
import { usePassresetContext } from "../../contexts/passreset-context";
import PasswwordReset from "../../components/password-reset";

const Home = () => {
  const { isLogin } = useHeaderContext();
  const { isRegister } = useRegisterContext();
  const { isPassreset } = usePassresetContext();

  useEffect(() => {
    const handleResize = () => {
      const video = document.getElementById(
        "background-video"
      ) as HTMLVideoElement;
      if (video) {
        if (window.innerWidth <= 1024) {
          video.pause();
        } else {
          video.play();
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHome className="StyledHome">
      <video muted autoPlay loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isPassreset && <PasswwordReset />}
      <LogoHomeCenter />
      <SocialMedia />
    </StyledHome>
  );
};

export default Home;
