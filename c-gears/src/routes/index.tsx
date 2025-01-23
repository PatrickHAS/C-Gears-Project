import { Routes, Route } from "react-router-dom";
import PasswordReset from "../components/password-reset";
import Home from "../pages/home";

const RoutersMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users/pass-reset/:id/:token" element={<PasswordReset />} />
    </Routes>
  );
};
export default RoutersMain;
