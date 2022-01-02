import React, { useState, useRef } from "react";
import { Card, Input } from "antd";
import MainPageModal from "./MainPageModal";
import "./index.css";
import { ChatContent } from "./ChatContent";
import { useMainPage } from "./useMainPage";

const { TextArea } = Input;

export default function MainPage() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userInput, setUserInput] = useState("");
  const { submitMessage } = useMainPage();
  const chatContainerRef = useRef(null);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      submitMessage(userInput);
      setUserInput("");
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight || 0;
      }
    }
  };

  return (
    <div className="main-page-wrapper">
      <MainPageModal
        show={isModalVisible}
        updateModalShow={setIsModalVisible}
      />
      <Card style={{ width: "100vw", background: "lightgray" }}>
        <ChatContent chatContainerRef={chatContainerRef} />
        <TextArea
          value={userInput}
          rows={4}
          style={{ marginTop: 20 }}
          onKeyUp={handleKeyUp}
          onChange={(e) => setUserInput(e.target.value)}
        ></TextArea>
      </Card>
    </div>
  );
}
