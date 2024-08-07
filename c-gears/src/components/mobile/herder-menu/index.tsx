import { StyledHeaderMenuList } from "./styles";

const HeaderMenuListMobile = () => {
  return (
    <>
      <StyledHeaderMenuList className="StyledHeaderMenuList">
        <li className="menu-item--mobile">
          <p>Teams</p>
        </li>
        <li className="menu-item--mobile">
          <p>Champions</p>
        </li>
        <li className="menu-item--mobile">
          <p>Tournament</p>
        </li>
        <li className="menu-item--mobile">
          <p>News</p>
        </li>
        <li className="menu-item--mobile">
          <p>Communities</p>
        </li>
        <li className="menu-item--mobile">
          <p>Support</p>
        </li>
        <li className="menu-item--mobile">
          <p>GearsClub BR</p>
        </li>
      </StyledHeaderMenuList>
    </>
  );
};
export default HeaderMenuListMobile;
