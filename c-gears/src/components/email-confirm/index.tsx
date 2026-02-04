/* eslint-disable no-sequences */
import { useForm } from "react-hook-form";
import { useHeaderContext } from "../../contexts/header-context";
import { useEmailConfirmContext } from "../../contexts/email-confirm-context";
import { StyledEmailConfirm } from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailConfirmSchema } from "../../validators/schema";

export interface IEmail {
  email: string;
  emailConfirm: string;
}

const EmailConfirm = () => {
  const { isLogin, setIsLogin } = useHeaderContext();
  const { isEmailConfirm, setIsEmailConfirm, emailConfirmSubmit } =
    useEmailConfirmContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>({
    resolver: yupResolver(EmailConfirmSchema),
  });

  return (
    <StyledEmailConfirm>
      <div className="box-card-emailConfirm">
        <div className="card-emailConfirm">
          <div className="header-emailConfirm">
            <img
              className="logo-emailConfirm"
              alt=""
              src="logo-gearsclub.png"
            />
            <h2 className="title-emailConfirm">Email Confirm</h2>
            <IoCloseOutline
              className="icon-close-emailConfirm"
              onClick={() => (
                setIsEmailConfirm(!isEmailConfirm),
                setIsLogin(!isLogin)
              )}
            />
          </div>
          <form
            className="form-emailConfirm"
            onSubmit={handleSubmit(emailConfirmSubmit)}
          >
            <input
              className="input-email"
              id="email-first"
              type="text"
              autoComplete="email"
              placeholder="Email address"
              {...register("email")}
            />
            <div className="label-errors">
              <label htmlFor="email-first"></label>
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
    </StyledEmailConfirm>
  );
};
export default EmailConfirm;
