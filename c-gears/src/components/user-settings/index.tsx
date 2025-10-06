import { useLoginContext } from "../../contexts/login-context";
import { useUserSettingsContext } from "../../contexts/user-settings-context";
import { StyledUserSettings } from "./styles";
import { TiArrowBack } from "react-icons/ti";
import { RiFileUserLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { FaLink, FaEdit } from "react-icons/fa";

export interface IUpdateUserData {
  name?: string;
  surname?: string;
  username?: string;
  cellphone?: string;
  birthday?: string;
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
        {activeTab === "myData" && (
          <div className="user-data--content">
            <h3 className="title-my-data"> My data</h3>
            <form className="form-user-data">
              <div className="label-input--container">
                <label htmlFor="name">Name</label>
                <div className="input--container">
                  <input
                    className="input-name"
                    id="name"
                    type="text"
                    value={user.name}
                  />
                  <FaEdit className="icon-edit" />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="surname">Surname</label>
                <div className="input--container">
                  <input
                    className="input-surname"
                    id="surname"
                    type="text"
                    value={user.surname}
                  />
                  <FaEdit className="icon-edit" />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="username">Username</label>
                <div className="input--container">
                  <input
                    className="input-username"
                    id="username"
                    type="text"
                    value={user.username}
                  />
                  <FaEdit className="icon-edit" />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="email">Email</label>
                <div className="input--container">
                  <input
                    className="input-email"
                    id="email"
                    type="text"
                    value={user.email}
                  />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="cellphone">Cellphone</label>
                <div className="input--container">
                  <input
                    className="input-cellphone"
                    id="cellphone"
                    type="text"
                    value={user.cellphone}
                  />
                  <FaEdit className="icon-edit" />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="birthday">Birthday</label>
                <div className="input--container">
                  <input
                    className="input-birthday"
                    id="birthday"
                    type="text"
                    value={String(user.birthday)}
                  />
                  <FaEdit className="icon-edit" />
                </div>
              </div>
              <button className="btn--save-change" type="submit">
                SAVE CHANGE
              </button>
            </form>
          </div>
        )}
        {activeTab === "myAddress" && (
          <div className="user-address--content">
            <h3 className="title-my-address"> My address</h3>
            <form className="form-user-address"></form>
          </div>
        )}
        {activeTab === "changeEmail" && (
          <div className="change-email--content">
            <h3 className="title-change-email"> Change email</h3>
            <form className="form-change-email"></form>
          </div>
        )}
        {activeTab === "changePass" && (
          <div className="change-pass--content">
            <h3 className="title-change-pass"> Change password</h3>
            <form className="form-change-pass"></form>
          </div>
        )}
        {activeTab === "linkAccount" && (
          <div className="link-account--content">
            <h3 className="title-link-account"> Link account</h3>
            <form className="form-link-account"></form>
          </div>
        )}
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
