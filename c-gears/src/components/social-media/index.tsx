import { StyledSocialMedia } from "./styles";
import { FaDiscord, FaSteam, FaXbox } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsTwitch, BsYoutube } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTikTok } from "react-icons/ai";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <StyledSocialMedia className="StyledSocialMedia">
      <div className="banner--social-media">
        <div className="icon-discord">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord title="Discord" />
          </a>
        </div>
        <div className="icon-twitter">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill title="Twitter" />
          </a>
        </div>
        <div className="icon-youtube">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube title="YouTube" />
          </a>
        </div>
        <div className="icon-facebook">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook title="Facebook" />
          </a>
        </div>
        <div className="icon-tiktok">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTikTok title="Tiktok" />
          </a>
        </div>
        <div className="icon-twitch">
          <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
            <BsTwitch title="Twitch" />
          </a>
        </div>
      </div>
      <div className="dowload-channel">
        <div className="icon-steam">
          <a
            href="https://store.steampowered.com/app/3010850/Gears_of_War_EDay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSteam title="Wishlist Steam" />
          </a>
        </div>
        <div className="icon-xbox">
          <a
            href="https://www.xbox.com/pt-BR/xbox-game-pass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXbox title="Gamepass" />
          </a>
        </div>
        <div className="icon-microsoft_store">
          <a
            href="https://www.microsoft.com/store/productId/C2KDNLT2H7DM?ocid=pdpshare"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiMicrosoftAlt title="Microsoft store" />
          </a>
        </div>
      </div>
    </StyledSocialMedia>
  );
};
export default SocialMedia;
