import { useContext } from "react";
import { SocketContext } from "../../context/socketContext";
import { GlobalContext } from "../../context/globalContext";

export const useMainPage = () => {
  const { socket } = useContext(SocketContext);
  const { user } = useContext(GlobalContext);

  const submitMessage = (message) => {
    socket.emit("messageInsert", { user, content: message });
  };

  return {
    submitMessage,
  };
};
