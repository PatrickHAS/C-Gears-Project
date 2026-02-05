import { useLoginContext } from "../../contexts/login-context";
import { useUserSettingsContext } from "../../contexts/user-settings-context";
import { StyledUserSettings } from "./styles";
import { TiArrowBack } from "react-icons/ti";
import { RiFileUserLine } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSettingsSchema } from "../../validators/schema";

export interface IUpdateUserData {
  name?: string;
  surname?: string;
  username?: string;
  cellphone?: string;
  birthday?: string;
}

const UserSettings = () => {
  const { user } = useLoginContext();

  const {
    isUserSettings,
    setIsUserSettings,
    activeTab,
    setActiveTab,
    updateSubmit,
    formatDateForInput,
    TOAST_MESSAGES,
    showToast,
  } = useUserSettingsContext();

  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    control,
  } = useForm<IUpdateUserData>({
    resolver: yupResolver(UserSettingsSchema),
  });

  const onSubmit = (data: IUpdateUserData) => {
    const updatedData = Object.keys(dirtyFields).reduce((acc, field) => {
      acc[field as keyof IUpdateUserData] =
        data[field as keyof IUpdateUserData];
      return acc;
    }, {} as Partial<IUpdateUserData>);

    if (!Object.keys(updatedData).length) {
      showToast("info", TOAST_MESSAGES.NO_CHANGES);
      return;
    }

    if (updatedData.username && updatedData.username === user.username) {
      showToast("info", TOAST_MESSAGES.USERNAME_SAME);
      return;
    }

    if (updatedData.cellphone && updatedData.cellphone === user.cellphone) {
      showToast("info", TOAST_MESSAGES.CELLPHONE_SAME);
      return;
    }

    updateSubmit(updatedData);
  };

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
            <form className="form-user-data" onSubmit={handleSubmit(onSubmit)}>
              <div className="label-input--container">
                <label htmlFor="name">Name</label>
                <div className="input--container">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={user.name}
                    render={({ field }) => (
                      <input
                        className="input-name"
                        id="name"
                        type="text"
                        autoComplete="given-name"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="label-errors">
                  <label htmlFor="name"></label>
                  <p>{errors.name?.message}</p>
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="surname">Surname</label>
                <div className="input--container">
                  <Controller
                    name="surname"
                    control={control}
                    defaultValue={user.surname}
                    render={({ field }) => (
                      <input
                        className="input-surname"
                        id="surname"
                        type="text"
                        autoComplete="family-name"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="label-errors">
                  <label htmlFor="surname"></label>
                  <p>{errors.surname?.message}</p>
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="username">Username</label>
                <div className="input--container">
                  <Controller
                    name="username"
                    control={control}
                    defaultValue={user.username}
                    render={({ field }) => (
                      <input
                        className="input-username"
                        id="username"
                        type="text"
                        autoComplete="off"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="label-errors">
                  <label htmlFor="username"></label>
                  <p>{errors.username?.message}</p>
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="email">Email</label>
                <div className="input--container">
                  <input
                    className="input-email"
                    id="email"
                    type="text"
                    autoComplete="email"
                    value={user.email}
                    readOnly
                  />
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="cellphone-setting">Cellphone</label>
                <Controller
                  control={control}
                  name="cellphone"
                  defaultValue={user.cellphone}
                  render={({ field }) => (
                    <PhoneInput
                      country="br"
                      enableSearch
                      placeholder="Enter your phone number"
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      inputProps={{
                        id: "cellphone-setting",
                        name: "cellphone",
                        autoComplete: "tel",
                      }}
                    />
                  )}
                />
                <div className="label-errors">
                  <label htmlFor="cellphone-setting"></label>
                  <p>{errors.cellphone?.message}</p>
                </div>
              </div>
              <div className="label-input--container">
                <label htmlFor="birthday-setting">Birthday</label>
                <div className="input--container">
                  <Controller
                    name="birthday"
                    control={control}
                    defaultValue={formatDateForInput(user.birthday)}
                    render={({ field }) => (
                      <input
                        className="input-birthday"
                        id="birthday-setting"
                        type="date"
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="label-errors">
                  <label htmlFor="birthday-setting"></label>
                  <p>{errors.birthday?.message}</p>
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
