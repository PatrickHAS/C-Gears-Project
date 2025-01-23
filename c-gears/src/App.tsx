import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import RoutersMain from "./routes";

function App() {
  return (
    <div className="App">
      <RoutersMain />
      <ToastContainer />
    </div>
  );
}

export default App;
