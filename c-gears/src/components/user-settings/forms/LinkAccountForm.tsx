import { FaPlaystation, FaSteam, FaXbox } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import { useUserSettingsContext } from "../../../contexts/user-settings-context/hook";

export const LinkAccountForm = () => {
  const { linkedAccounts, linkAccount, unlinkAccount, getGamertag } =
    useUserSettingsContext();

  return (
    <div className="link-account--content">
      <h3 className="title-link-account">Link account</h3>
      <div className="link-accounts--container">
        <div className="input-link-btn-desable--container">
          <div className="lg-input-btn--container">
            <div className="icon-lg--container" title="Steam">
              <FaSteam className="steam-lg" />
            </div>
            <input
              name="steam"
              className="input-link-account-steam"
              value={getGamertag("steam")}
              readOnly
            />
            <button
              className="btn-link-account-steam"
              onClick={() => linkAccount("steam")}
              type="button"
              title="Link Account"
            >
              <GoLink className="go-link--icon" />
            </button>
          </div>
          <button
            className="btn-unlink-steam"
            onClick={() => unlinkAccount("steam")}
          >
            Steam Unlink
          </button>
        </div>

        <div className="input-link-btn-desable--container">
          <div className="lg-input-btn--container">
            <div className="icon-lg--container" title="Xbox">
              <FaXbox className="xbox-lg" />
            </div>
            <input
              name="xbox"
              className="input-link-account-xbox"
              value={getGamertag("xbox")}
              readOnly
            />
            <button
              className="btn-link-account-xbox"
              onClick={() => linkAccount("xbox")}
              type="button"
              title="Link Account"
            >
              <GoLink className="go-link--icon" />
            </button>
          </div>
          <button className="btn-unlink-xbox">Xbox Unlink</button>
        </div>

        <div className="input-link-btn-desable--container">
          <div className="lg-input-btn--container">
            <div className="icon-lg--container" title="PlayStation">
              <FaPlaystation className="psn-lg" />
            </div>
            <input
              name="playstation"
              className="input-link-account-psn"
              type="text"
            />
            <button
              className="btn-link-account-psn"
              type="button"
              title="Link Account"
            >
              <GoLink className="go-link--icon" />
            </button>
          </div>
          <button className="btn-unlink-psn">PSN Unlink</button>
        </div>
      </div>
    </div>
  );
};
