import { useHeaderContext } from "../../contexts/header-context";
import { StyledLogin } from "./styles";
import { IoCloseOutline } from "react-icons/io5";

const Login = () => {
  const { setIsLogin, isLogin } = useHeaderContext();

  return (
    <StyledLogin>
      <div className="box-card-login">
        <div className="card-login">
          <div className="header-login">
            <img className="logo-login" alt="" src="logo-gearsclub.png" />
            <IoCloseOutline
              className="icon-close-login"
              onClick={() => setIsLogin(!isLogin)}
            />
          </div>
          <form className="form-login"></form>
        </div>
      </div>
    </StyledLogin>
  );
};
export default Login;
