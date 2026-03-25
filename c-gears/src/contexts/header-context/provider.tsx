import { useState } from "react";
import { IHeaderProvider } from "./types";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "./context";

export const HeaderProvider = ({ children }: IHeaderProvider) => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <HeaderContext.Provider
      value={{ isMenuMobile, setIsMenuMobile, isLogin, setIsLogin, navigate }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
