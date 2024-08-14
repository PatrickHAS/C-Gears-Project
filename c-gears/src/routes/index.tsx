import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const RoutersMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default RoutersMain;
