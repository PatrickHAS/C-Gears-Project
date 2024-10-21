import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHeaderContext } from "../../contexts/header-context";
import { StyledLogin } from "./styles";
import { IoCloseOutline } from "react-icons/io5";
import { LoginSchema } from "../../validators/schema";
import { useLoginContext } from "../../contexts/login-context";

interface Ilogin {
  email: string;
  password: string;
}

const Login = () => {
  const { setIsLogin, isLogin } = useHeaderContext();
  const { onSubmitLogin } = useLoginContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Ilogin>({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <StyledLogin>
      <div className="box-card-login">
        <div className="card-login">
          <div className="header-login">
            <img className="logo-login" alt="" src="logo-gearsclub.png" />
            <span className="text-login">Login</span>
            <IoCloseOutline
              className="icon-close-login"
              onClick={() => setIsLogin(!isLogin)}
            />
          </div>
          <form className="form-login" onSubmit={handleSubmit(onSubmitLogin)}>
            <div className="register">
              <p>
                New player? <span>Register</span>
              </p>
            </div>
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
            <div className="forgot-password">
              <p>Forgot your password?</p>
            </div>
            <button className="btn-enter" type="submit">
              Enter
            </button>
            <footer>
              <img className="logo-cgo" alt="" src="Cog-logo.png" />
              <img className="logo-locust" alt="" src="Locust-logo.png" />
            </footer>
          </form>
        </div>
      </div>
    </StyledLogin>
  );
};
export default Login;
