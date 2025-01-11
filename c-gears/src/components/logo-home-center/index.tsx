import { useHeaderContext } from "../../contexts/header-context";
import { usePassresetContext } from "../../contexts/passreset-context";
import { useRegisterContext } from "../../contexts/register-context";
import { StyledLogoHomeCenter } from "./styles";

const LogoHomeCenter = () => {
  const { isLogin } = useHeaderContext();
  const { isRegister } = useRegisterContext();
  const { isPassreset } = usePassresetContext();

  if (isLogin || isRegister || isPassreset) {
    return null;
  }

  return (
    <StyledLogoHomeCenter className="StyledLogoHomeCenter">
      <img className="logo-home-center" alt="" src="logo-gearsclub.png" />
    </StyledLogoHomeCenter>
  );
};
export default LogoHomeCenter;
