import { StyledHeader } from "./styles";
import { BsOption } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useHeaderContext } from "../../contexts/header-context";
import HeaderMenuListMobile from "../mobile/herder-menu";
import { useLoginContext } from "../../contexts/login-context";
import { RxExit } from "react-icons/rx";
import { FaCaretUp } from "react-icons/fa";
import { useModalSetupContext } from "../../contexts/modal-setup-context";
import ModalSetup from "../account-setup";

const Header = () => {
  const { isMenuMobile, setIsMenuMobile, isLogin, setIsLogin } =
    useHeaderContext();

  const { token, logout, user } = useLoginContext();
  const { isModalSetup, setIsModalSetup } = useModalSetupContext();

  return (
    <>
      {isMenuMobile && <HeaderMenuListMobile />}
      <StyledHeader className="StyledHeader">
        <div className="logo--container">
          <img className="logo-image" alt="" src="logo-gearsclub.png" />
        </div>
        {token ? <button className="btn-playnow">Play now</button> : null}
        <ul className="menu-list">
          <li className="menu-item">
            <p>Teams</p>
          </li>
          <li className="menu-item">
            <p>Champions</p>
          </li>
          <li className="menu-item">
            <p>Tournament</p>
          </li>
          <li className="menu-item">
            <p>News</p>
          </li>
          <li className="menu-item">
            <p>Communities</p>
          </li>
          <li className="menu-item">
            <p>Gears Club</p>
          </li>
        </ul>
        <div className="menu--username-login">
          {token ? (
            <div className="container--username-icondown">
              <h4 className="username">{user.username}</h4>
              <FaCaretUp
                className={`icon-down ${isModalSetup ? "rotate" : ""}`}
                onClick={() => setIsModalSetup(!isModalSetup)}
              />
              {isModalSetup && <ModalSetup />}
            </div>
          ) : null}

          {token ? (
            <span className="container--icon-exit" title="Log out of account">
              <RxExit className="logout" onClick={() => logout()} />
            </span>
          ) : (
            <span className="login" onClick={() => setIsLogin(!isLogin)}>
              Login
            </span>
          )}
        </div>
        <div className="icon-option--container">
          {isMenuMobile ? (
            <AiOutlineClose onClick={() => setIsMenuMobile(!isMenuMobile)} />
          ) : (
            <BsOption onClick={() => setIsMenuMobile(!isMenuMobile)} />
          )}
        </div>
      </StyledHeader>
    </>
  );
};
export default Header;
