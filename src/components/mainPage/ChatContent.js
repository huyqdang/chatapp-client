import React from "react";
import { Card, Comment, Avatar } from "antd";
import { useChatContent } from "./useChatContent";

export function ChatContent({ chatContainerRef }) {
  const { messages } = useChatContent();

  const loadMessages = () => {
    return messages.map((message, index) => {
      return (
        <Comment
          key={index}
          author={<a>{message.user.name}</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>{message.content}</p>}
        ></Comment>
      );
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        overflow: "auto",
        background: "white",
      }}
      ref={chatContainerRef}
    >
      {loadMessages()}
    </div>
  );
}
