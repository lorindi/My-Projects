import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <Navbar />
    </div>
  );
}

export default App;
