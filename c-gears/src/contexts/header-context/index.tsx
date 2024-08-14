import { useContext, createContext, useState, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IHeaderProvider {
  children: ReactNode;
}

interface IHeaderContext {
  isMenuMobile: boolean;
  setIsMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext<IHeaderContext>(
  {} as IHeaderContext
);

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
export const useHeaderContext = () => useContext(HeaderContext);
