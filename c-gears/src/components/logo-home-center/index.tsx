import { useHeaderContext } from "../../contexts/header-context";
import { useEmailConfirmContext } from "../../contexts/email-confirm-context";
import { useRegisterContext } from "../../contexts/register-context";
import { StyledLogoHomeCenter } from "./styles";

const LogoHomeCenter = () => {
  const { isLogin } = useHeaderContext();
  const { isRegister } = useRegisterContext();
  const { isEmailConfirm } = useEmailConfirmContext();

  if (isLogin || isRegister || isEmailConfirm) {
    return null;
  }

  return (
    <StyledLogoHomeCenter className="StyledLogoHomeCenter">
      <img className="logo-home-center" alt="" src="logo-gearsclub.png" />
    </StyledLogoHomeCenter>
  );
};
export default LogoHomeCenter;
