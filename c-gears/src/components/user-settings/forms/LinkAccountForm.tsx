import { FaPlaystation, FaSteam, FaXbox } from "react-icons/fa";
import { GoLink } from "react-icons/go";

export const LinkAccountForm = () => {
  return (
    <div className="link-account--content">
      <h3 className="title-link-account">Link account</h3>
      <form className="form-link-account">
        <div className="input-link-btn-desable--container">
          <div className="lg-input-btn--container">
            <div className="icon-lg--container" title="Steam">
              <FaSteam className="steam-lg" />
            </div>
            <input
              className="input-link-account-steam"
              type="text"
              autoComplete="username"
            />
            <button
              className="btn-link-account-steam"
              type="submit"
              title="Link Account"
            >
              <GoLink />
            </button>
          </div>
          <button className="btn-unlink-steam">Steam Unlink</button>
        </div>

        <div className="input-link-btn-desable--container">
          <div className="lg-input-btn--container">
            <div className="icon-lg--container" title="Xbox">
              <FaXbox className="xbox-lg" />
            </div>
            <input
              className="input-link-account-xbox"
              type="text"
              autoComplete="username"
            />
            <button
              className="btn-link-account-xbox"
              type="submit"
              title="Link Account"
            >
              <GoLink />
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
              className="input-link-account-psn"
              type="text"
              autoComplete="username"
            />
            <button
              className="btn-link-account-psn"
              type="submit"
              title="Link Account"
            >
              <GoLink />
            </button>
          </div>
          <button className="btn-unlink-psn">PSN Unlink</button>
        </div>
      </form>
    </div>
  );
};
