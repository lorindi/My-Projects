import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

export const Logout = () => {
  const { logoutHandler } = useContext(Contexts);

  const handleLogout = () => {
    logoutHandler();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

