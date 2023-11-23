import { useContext, useEffect } from "react";

import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../paths";
import { Contexts } from "../../contexts/Contexts";

export const Logout = () => {
    const navigate = useNavigate()
    const {logoutHandler} = useContext(Contexts)
  useEffect(() => {
    authService.logout()
    .then(() => {
        logoutHandler()
        navigate(Path.Home)
    })
    .catch(() => navigate(Path.Home))
  }, []);

  return null;
};
