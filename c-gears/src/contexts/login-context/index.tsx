import { useNavigate, NavigateFunction } from "react-router-dom";
import api from "../../services/Api";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import { useHeaderContext } from "../header-context";

interface ILoginProvider {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: Date;
  ssn: string;
  email: string;
  password: string;
  isAdm?: boolean;
  address: {
    id: string;
    street: string;
    number: string;
    apt_unit?: string | null;
    neighborhoods?: string | null;
    city: string;
    state: string;
    zipcode: string;
  };
}

interface IAuthContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  id: string | null;
  navigate: NavigateFunction;
  onSubmitLogin: (data: ILoginData) => Promise<void>;
  logout: () => void;
}

export const LoginContext = createContext<IAuthContext>({} as IAuthContext);

export const LoginProvier = ({ children }: ILoginProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@Token");
  const id = localStorage.getItem("@UserId");
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useHeaderContext();

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const onSubmitLogin = async (data: ILoginData) => {
    try {
      await api.post("/login", data).then(async (res) => {
        api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        const { data } = await api.get(`/users/${res.data.id}`);
        setUser(data);
        localStorage.setItem("@Token", res.data.token);
        localStorage.setItem("@UserId", res.data.userId);
        navigate("/", { replace: true });
        setIsLogin(!isLogin);
      });
    } catch (error) {
      console.error(error);

      toast.error("Incorrect password or email!", {
        position: isMobile ? "top-center" : "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: isMobile ? "90%" : "fit-content",
          margin: isMobile ? "0 auto" : "default",
          marginTop: isMobile ? "20px" : "default",
          borderRadius: isMobile ? "5px" : "default",
          fontSize: isMobile ? "12px" : "16px",
          fontFamily: "Orbitron",
          letterSpacing: "0.5px",
          color: "black",
        },
      });
    }
  };

  useEffect(() => {
    async function loadLogin() {
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}`);
          setUser(data);
        } catch (error) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const logout = () => {
    navigate("/");
    window.localStorage.clear();
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        loading,
        id,
        logout,
        navigate,
        onSubmitLogin,
        setLoading,
        setUser,
        token,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLoginContext = () => useContext(LoginContext);
