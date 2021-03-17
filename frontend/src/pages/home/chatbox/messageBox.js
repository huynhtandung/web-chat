import React from "react";
import MessageItem from "./messageItem";

const MessageBox = ({ messages }) => {
  return (
    <div className="message-box">
      {messages.map((mess, idx) => {
        return <MessageItem key={idx} mess={mess} />;
      })}
    </div>
  );
};

export default MessageBox;
