/* eslint-disable no-sequences */
import { IoCloseOutline } from "react-icons/io5";
import { StyledPasswordReset } from "./styles";
import { useForm } from "react-hook-form";
import { PasswordResetSchema } from "../../validators/schema";
import { usePasswordResetContext } from "../../contexts/passwordReset.context";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IPasswordReset {
  password: string;
  passwordConfirm: string;
}

const PasswordReset = () => {
  const { passwordResetSubmit } = usePasswordResetContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordReset>({
    resolver: yupResolver(PasswordResetSchema),
  });

  return (
    <StyledPasswordReset>
      <div className="box-card-passwordReset">
        <div className="card-passwordReset">
          <div className="header-passwordReset">
            <img
              className="logo-passwordReset"
              alt=""
              src="/logo-gearsclub.png"
            />
            <h2 className="title-passwordReset">Password Reset</h2>
            <IoCloseOutline
              className="icon-close-passwordReset"
              onClick={() => window.close()}
            />
          </div>
          <form
            className="form-passwordReset"
            onSubmit={handleSubmit(passwordResetSubmit)}
          >
            <input
              className="input-password"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <div className="label-errors">
              <label htmlFor="password"></label>
              <p>{errors.password?.message}</p>
            </div>
            <input
              className="input-passwordConfirm"
              id="passwordConfirm"
              type="password"
              placeholder="Confirm your new password"
              {...register("passwordConfirm")}
            />
            <div className="label-errors">
              <label htmlFor="passwordConfirm"></label>
              <p>{errors.passwordConfirm?.message}</p>
            </div>
            <button className="btn-passwordReset" type="submit">
              CONFIRM YOUR NEW PASSWORD
            </button>
          </form>
          <footer>
            <img className="logo-cgo" alt="" src="/Cog-logo.png" />
            <img className="logo-locust" alt="" src="/Locust-logo.png" />
          </footer>
        </div>
      </div>
    </StyledPasswordReset>
  );
};
export default PasswordReset;
