import { StyledHeader } from "./styles";
import { GoSearch } from "react-icons/go";
import { BsOption } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useHeaderContext } from "../../contexts/header-context";
import HeaderMenuListMobile from "../mobile/herder-menu";

const Header = () => {
  const { isMenuMobile, setIsMenuMobile } = useHeaderContext();
  return (
    <>
      {isMenuMobile && <HeaderMenuListMobile />}
      <StyledHeader className="StyledHeader">
        <div className="logo--container">
          {/* <span className="logo-name">GEARS CLUB</span> */}
          <img className="logo-image" alt="" src="logo-gearsclub.png" />
        </div>
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
            <p>GearsClub BR</p>
          </li>
        </ul>
        <div className="menu--search-login">
          <div className="icon-search--container">
            <GoSearch className="icon-search" />
          </div>
          <span className="login">Login</span>
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
