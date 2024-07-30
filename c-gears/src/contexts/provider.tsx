import { ReactNode } from "react";
import { HeaderProvider } from "./header-context";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <HeaderProvider>{children}</HeaderProvider>
);
export default Provider;
