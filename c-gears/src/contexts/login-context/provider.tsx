import { useEffect, useState } from "react";
import { ILoginData, ILoginProvider, IUser } from "./types";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { LoginContext } from "./context";
import { useHeaderContext } from "../header-context/hook";

export const LoginProvier = ({ children }: ILoginProvider) => {
  const [user, setUser] = useState<IUser | null>({} as IUser);
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
    localStorage.removeItem("@Token");
    localStorage.removeItem("@UserId");

    setUser(null);

    navigate("/");
    window.location.reload();
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
