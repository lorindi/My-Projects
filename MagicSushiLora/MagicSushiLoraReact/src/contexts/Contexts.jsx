import { createContext, useState } from "react";
import axios from "axios";
import { usePersistedState } from "../hooks/usePersistedState";
import { useThemeState } from "../hooks/useThemeState";

export const Contexts = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = usePersistedState("auth", {});
  const [error, setError] = useState(null);
  const [fault, setFault] = useState(null);

  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useThemeState("theme", initialTheme);

  const initialToken = localStorage.getItem("accessToken");
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${initialToken}`,
    },
  });

  const onLoginSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("auth/login/", values);
      setAuth(response.data);
      localStorage.setItem("accessToken", response.data.token);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
    try {
      const response = await axiosInstance.post("auth/register/", values);
      setAuth(response.data);
      localStorage.setItem("accessToken", response.data.token);
    } catch (error) {
      setFault("Registration failed. Please try again.");
    }
  };

  const logoutHandler = async () => {
    try {
      await axiosInstance.post("auth/logout/");
      setAuth({});
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth.user_id,
    isAuthenticated: !!auth.token,
    getError: () => error,
    clearError: () => setError(null),
    getFault: () => fault,
    clearFault: () => setFault(null),
    axiosInstance: axiosInstance,
    initialToken: initialToken,
    theme,
    toggleTheme,

  };

  return <Contexts.Provider value={values}>{children}</Contexts.Provider>;
};
