import { StyledLogoHomeCenter } from "./styles";
import { useRegisterContext } from "../../contexts/register-context/hook";
import { useHeaderContext } from "../../contexts/header-context/hook";
import { useEmailConfirmContext } from "../../contexts/email-confirm-context/hook";

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
