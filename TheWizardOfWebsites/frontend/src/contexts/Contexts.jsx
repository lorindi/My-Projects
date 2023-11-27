import { createContext } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../components/paths";
import PropTypes from "prop-types";
import { usePersistedState } from "../hooks/usePersistedState";

export const Contexts = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const onLoginSubmit = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate(Path.Home);
  };

  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <Contexts.Provider value={values}>
      {children}
    </Contexts.Provider>
    );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
