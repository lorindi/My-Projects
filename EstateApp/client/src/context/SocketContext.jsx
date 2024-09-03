import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    setSocket(io("http://localhost:4000"))
  }, []);

  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  );
};


export {SocketContext, SocketContextProvider};