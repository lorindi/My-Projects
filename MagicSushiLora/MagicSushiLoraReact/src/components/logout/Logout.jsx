import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

export const Logout = () => {
  const { logoutHandler } = useContext(Contexts);

  const handleLogout = () => {
    logoutHandler();
  };

  return (
      <button onClick={handleLogout}>Logout</button>
  );
};

