import Header from "../../components/header";
import backgroundVideo from "../../assets/goweday.mp4";
import { StyledHome } from "./styles";
import SocialMedia from "../../components/social-media";
import LogoHomeCenter from "../../components/logo-home-center";
import { useEffect } from "react";

const Home = () => {
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
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      <LogoHomeCenter />
      <SocialMedia />
    </StyledHome>
  );
};

export default Home;
