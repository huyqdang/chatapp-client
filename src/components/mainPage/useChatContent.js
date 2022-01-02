import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../../context/socketContext";

export const useChatContent = () => {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket?.on("messageUpdated", (messageArray) => {
      setMessages(messageArray);
    });

    return () => {
      socket?.off("messageUpdated");
    };
  }, [socket]);

  return {
    messages,
  };
};
