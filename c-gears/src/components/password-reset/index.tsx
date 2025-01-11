/* eslint-disable no-sequences */
import { useForm } from "react-hook-form";
import { useHeaderContext } from "../../contexts/header-context";
import { usePassresetContext } from "../../contexts/passreset-context";
import { StyledPasswordReset } from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { PassResetSchema } from "../../validators/schema";

export interface IEmail {
  email: string;
  emailConfirm: string;
}

const PasswordReset = () => {
  const { isLogin, setIsLogin } = useHeaderContext();
  const { isPassreset, setIsPassreset, passResetSubmit } =
    usePassresetContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: yupResolver(PassResetSchema),
  });

  return (
    <StyledPasswordReset>
      <div className="box-card-passreset">
        <div className="card-passreset">
          <div className="header-passreset">
            <img className="logo-passreset" alt="" src="logo-gearsclub.png" />
            <h2 className="title-passreset">Reset Password</h2>
            <IoCloseOutline
              className="icon-close-passreset"
              onClick={() => (
                setIsPassreset(!isPassreset), setIsLogin(!isLogin)
              )}
            />
          </div>
          <form
            className="form-passreset"
            onSubmit={handleSubmit(passResetSubmit)}
          >
            <input
              className="input-email"
              id="email"
              type="text"
              placeholder="Email address"
              {...register("email")}
            />
            <div className="label-errors">
              <label htmlFor="email"></label>
              <p>{errors.email?.message}</p>
            </div>
            <input
              className="input-emailConfirm"
              id="emailConfirm"
              type="text"
              placeholder="Confirm your email"
              {...register("emailConfirm")}
            />
            <div className="label-errors">
              <label htmlFor="emailConfirm"></label>
              <p>{errors.emailConfirm?.message}</p>
            </div>
            <button className="btn-golink" type="submit">
              SEND RESET LINK
            </button>
          </form>
          <footer>
            <img className="logo-cgo" alt="" src="Cog-logo.png" />
            <img className="logo-locust" alt="" src="Locust-logo.png" />
          </footer>
        </div>
      </div>
    </StyledPasswordReset>
  );
};
export default PasswordReset;
