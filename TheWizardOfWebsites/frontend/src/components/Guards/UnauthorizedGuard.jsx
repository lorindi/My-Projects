import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { Navigate, Outlet } from "react-router-dom";

export const UnauthorizedGuard = () => {
  const { isAuthenticated } = useContext(Contexts);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
