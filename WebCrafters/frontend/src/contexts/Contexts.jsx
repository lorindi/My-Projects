import { createContext, useState } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../components/paths";
import PropTypes from "prop-types";
import { usePersistedState } from "../hooks/usePersistedState";

export const Contexts = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [error, setError] = useState(null);
  const [fault, setFault] = useState(null);

  const onLoginSubmit = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);
      navigate(Path.Home);
    } catch (error) {
      console.error("Login failed:", error.message);
      setError("Login failed. Please check your credentials.");
    }
  };


  const registerSubmitHandler = async (values) => {
    const emailRegex = /^[a-zA-Z0-9]+@.[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z]+)*$/;

    if (values.password !== values['confirm-password']) {
      setFault("Passwords do not match. Please enter matching passwords.");
      return; // Спри регистрирането
    }

    try {
      // Validate email using regex
      if (!emailRegex.test(values.email)) {
        setFault("Invalid email format. Please enter a valid email address.");
        return; // Stop registration if email is not valid
      }

      const result = await authService.register(values.email, values.password);

      localStorage.setItem("accessToken", result.accessToken);
      setAuth(result);
      navigate(Path.Home);
    } catch (error) {
      console.error("Registration failed:", error.message);
      setFault("Registration failed. Please try again.");
    }
  
  };


  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate(Path.Home);
  };
  const getError = () => error;
  const clearError = () => setError(null);

  const getFault = () => fault;
  const clearFault = () => setFault(null);

  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    isAdmin: auth.email === 'admin@abv.bg' ? true : false,
    getError,
    clearError,
    getFault,
    clearFault,
  };
  return <Contexts.Provider value={values}>{children}</Contexts.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
