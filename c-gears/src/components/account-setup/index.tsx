/* eslint-disable no-sequences */
import { StyledModalSetup } from "./styles";
import { IoSettingsSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { useLoginContext } from "../../contexts/login-context";
import { useModalSetupContext } from "../../contexts/modal-setup-context";

const ModalSetup = () => {
  const { logout } = useLoginContext();
  const { isModalSetup, setIsModalSetup } = useModalSetupContext();

  return (
    <StyledModalSetup>
      <div className="modal--user-settings">
        <div className="container--icon-gear">
          <IoSettingsSharp className="icon-gear" />
        </div>
        <p className="title-settings">Profile Settings</p>
      </div>
      <div className="modal--signatures">
        <div className="container--icon-star">
          <FaStar className="icon-star" />
        </div>
        <p className="title-signatures">Signatures</p>
      </div>
      <div className="modal--support">
        <div className="container--icon-support">
          <BiSupport className="icon-support" />
        </div>
        <p className="title-support">Support</p>
      </div>
      <div
        className="modal--exit"
        onClick={() => (logout(), setIsModalSetup(!isModalSetup))}
      >
        <div className="container--icon-exit">
          <ImExit className="icon-exit" />
        </div>
        <p className="title-exit">Log out of account</p>
      </div>
    </StyledModalSetup>
  );
};
export default ModalSetup;
