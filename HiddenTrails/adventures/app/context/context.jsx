"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(false);

  const values = {
    session,
    setSession
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
    
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export const useAuth = () => useContext(Context);
  export default Context;