import { useState, createContext, useEffect } from "react";
import io from "socket.io-client";

const initState = {
  socket: null,
};
export const SocketContext = createContext(initState);

export const SocketContextProvider = (props) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log("socket connecting");
    const newSocket = io(`http://192.168.1.2:8080`, {
      auth: { token: "hello" },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const socketContextValue = {
    socket,
  };

  return (
    <SocketContext.Provider value={socketContextValue}>
      {props.children}
    </SocketContext.Provider>
  );
};
