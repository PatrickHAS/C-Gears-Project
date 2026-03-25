import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IHeaderProvider {
  children: ReactNode;
}

export interface IHeaderContext {
  isMenuMobile: boolean;
  setIsMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
