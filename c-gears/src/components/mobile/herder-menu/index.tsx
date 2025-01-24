import { StyledHeaderMenuList } from "./styles";

const HeaderMenuListMobile = () => {
  return (
    <>
      <StyledHeaderMenuList className="StyledHeaderMenuList">
        <li className="menu-item--mobile" tabIndex={0}>
          <p>Teams</p>
        </li>
        <li className="menu-item--mobile" tabIndex={0}>
          <p>Champions</p>
        </li>
        <li className="menu-item--mobile" tabIndex={0}>
          <p>Tournament</p>
        </li>
        <li className="menu-item--mobile" tabIndex={0}>
          <p>News</p>
        </li>
        <li className="menu-item--mobile" tabIndex={0}>
          <p>Communities</p>
        </li>
        <li className="menu-item--mobile" tabIndex={0}>
          <p>GearsClub BR</p>
        </li>
      </StyledHeaderMenuList>
    </>
  );
};
export default HeaderMenuListMobile;
