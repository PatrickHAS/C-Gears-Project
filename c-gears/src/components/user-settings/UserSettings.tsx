import { useLoginContext } from "../../contexts/login-context";
import { useUserSettingsContext } from "../../contexts/user-settings-context";
import { StyledUserSettings } from "./UserSettings.styles";
import { TiArrowBack } from "react-icons/ti";
import { RiFileUserLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import { MyDataForm } from "./forms/MyDataForm";
import { MyAddressForm } from "./forms/MyAddressForm";
import { ChangeEmailForm } from "./forms/ChangeEmailForm";
import { ChangePasswordForm } from "./forms/ChangePasswordForm";
import { LinkAccountForm } from "./forms/LinkAccountForm";

export interface IUpdateUserData {
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  cellphone?: string;
  birthday?: string;
  address?: IAddressData;
}

export interface IAddressData {
  street?: string;
  number?: string;
  apt_unit?: string;
  neighborhoods?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

const UserSettings = () => {
  const { user } = useLoginContext();

  const { isUserSettings, setIsUserSettings, activeTab, setActiveTab } =
    useUserSettingsContext();

  return (
    <StyledUserSettings>
      <div className="header-settings--container">
        <div className="logo-gc--container">
          <img className="logo-img" alt="" src="logo-gearsclub.png" />
        </div>
        <div className="name-back--container">
          <h4 className="name ">
            Hello, {user.name} {user.surname}
          </h4>
          <div className="icon-back--container" title="To go back">
            <TiArrowBack
              className="icon-back"
              onClick={() => setIsUserSettings(!isUserSettings)}
            />
          </div>
        </div>
      </div>
      <div className="options-settings--container">
        <div className="options-settings">
          <div
            className={`option-my-data ${
              activeTab === "myData" ? "active" : ""
            }`}
            onClick={() => setActiveTab("myData")}
            tabIndex={0}
          >
            <div className="icon--container">
              <RiFileUserLine className="icon-my-data" />
            </div>
            <p className="text-my-data">My data</p>
          </div>
          <div
            className={`option-my-address ${
              activeTab === "myAddress" ? "active" : ""
            }`}
            onClick={() => setActiveTab("myAddress")}
            tabIndex={0}
          >
            <div className="icon--container">
              <FaRegAddressBook className="icon-my-address" />
            </div>
            <p className="text-my-address">My address</p>
          </div>
          <div
            className={`option-change-email ${
              activeTab === "changeEmail" ? "active" : ""
            }`}
            onClick={() => setActiveTab("changeEmail")}
            tabIndex={0}
          >
            <div className="icon--container">
              <MdOutlineMailLock className="icon-change-email" />
            </div>
            <p className="text-change-email">Change email</p>
          </div>
          <div
            className={`option-change-password ${
              activeTab === "changePass" ? "active" : ""
            }`}
            onClick={() => setActiveTab("changePass")}
            tabIndex={0}
          >
            <div className="icon--container">
              <FaUserLock className="icon-change-password" />
            </div>
            <p className="text-change-password">Change password</p>
          </div>
          <div
            className={`option-link-account ${
              activeTab === "linkAccount" ? "active" : ""
            }`}
            onClick={() => setActiveTab("linkAccount")}
            tabIndex={0}
          >
            <div className="icon--container">
              <FaLink className="icon-link-account" />
            </div>
            <p className="text-link-account">Link account</p>
          </div>
        </div>
        {activeTab === "myData" && <MyDataForm />}
        {activeTab === "myAddress" && <MyAddressForm />}
        {activeTab === "changeEmail" && <ChangeEmailForm />}
        {activeTab === "changePass" && <ChangePasswordForm />}
        {activeTab === "linkAccount" && <LinkAccountForm />}
      </div>
      <footer className="footer-settings--container">
        <div className="footer-content">
          <div className="logo-gc-footer--container">
            <img className="logo-img-footer" alt="" src="logo-gearsclub.png" />
          </div>
          <div className="text-footer--container">
            <p className="text-footer">
              © 2025 Gears Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </StyledUserSettings>
  );
};
export default UserSettings;
