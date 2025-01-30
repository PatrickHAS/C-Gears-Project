/* eslint-disable no-sequences */
import { StyledDropdownSetup } from "./styles";
import { IoSettingsSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { GrMoney } from "react-icons/gr";
import { useLoginContext } from "../../contexts/login-context";
import { useDropdownSetupContext } from "../../contexts/drop-down-setup-context";
import { useUserSettingsContext } from "../../contexts/user-settings-context";

const DropdownSetup = () => {
  const { logout } = useLoginContext();
  const { isDropdownSetup, setIsDropdownSetup } = useDropdownSetupContext();
  const { isUserSettings, setIsUserSettings } = useUserSettingsContext();

  const saldo = 0;

  return (
    <StyledDropdownSetup>
      <div
        className="dropdown--user-settings"
        tabIndex={0}
        onClick={() => (
          setIsUserSettings(!isUserSettings),
          setIsDropdownSetup(!isDropdownSetup)
        )}
      >
        <div className="container--icon-gear">
          <IoSettingsSharp className="icon-gear" />
        </div>
        <p className="title-settings">Profile Settings</p>
      </div>
      <div className="dropdown--signatures" tabIndex={0}>
        <div className="container--icon-star">
          <FaStar className="icon-star" />
        </div>
        <p className="title-signatures">Signatures</p>
      </div>
      <div className="dropdown--support" tabIndex={0}>
        <div className="container--icon-support">
          <BiSupport className="icon-support" />
        </div>
        <p className="title-support">Support</p>
      </div>
      <div className="dropdown--money" tabIndex={0}>
        <div className="container--icon-money">
          <GrMoney className="icon-money" />
        </div>
        <p className="money-wallet">
          {saldo.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div
        className="dropdown--exit"
        onClick={() => (logout(), setIsDropdownSetup(!isDropdownSetup))}
      >
        <div className="container--icon-exit">
          <ImExit className="icon-exit" />
        </div>
        <p className="title-exit">Log out of account</p>
      </div>
    </StyledDropdownSetup>
  );
};
export default DropdownSetup;
