import Header from "../../components/header";
import backgroundVideo from "../../assets/gowe-day.mp4";
import { StyledHome } from "./styles";
import SocialMedia from "../../components/social-media";
import LogoHomeCenter from "../../components/logo-home-center";
import { useEffect, useState } from "react";
import Login from "../../components/login";
import Register from "../../components/register";
import EmailConfirm from "../../components/email-confirm";
import UserSettings from "../../components/user-settings/UserSettings";
import ConfirmCodeModal from "../../components/modals/confirm-code-modal";
import { useConfirmCodeContext } from "../../contexts/confirm-code-contex/hook";
import { useUserSettingsContext } from "../../contexts/user-settings-context/hook";
import { useRegisterContext } from "../../contexts/register-context/hook";
import { useHeaderContext } from "../../contexts/header-context/hook";
import { useEmailConfirmContext } from "../../contexts/email-confirm-context/hook";

const Home = () => {
  const { isLogin } = useHeaderContext();
  const { isRegister } = useRegisterContext();
  const { isEmailConfirm } = useEmailConfirmContext();
  const { isUserSettings } = useUserSettingsContext();
  const [isVideoPlayable, setIsVideoPlayable] = useState(
    () => window.innerWidth > 1024,
  );
  const { showCodeModal } = useConfirmCodeContext();

  useEffect(() => {
    const video = document.getElementById(
      "background-video",
    ) as HTMLVideoElement | null;

    if (!video) return;

    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        video.pause();
        setIsVideoPlayable(false);
      } else {
        setIsVideoPlayable(true);

        video.play().catch((err) => {
          console.warn("Autoplay prevented:", err);
        });
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
      <video
        muted
        autoPlay
        loop
        id="background-video"
        style={{ display: isVideoPlayable ? "flex" : "none" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Header />
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isEmailConfirm && <EmailConfirm />}
      {isUserSettings && <UserSettings />}
      {showCodeModal && <ConfirmCodeModal />}
      <LogoHomeCenter />
      <SocialMedia />
    </StyledHome>
  );
};

export default Home;
