// @ts-nocheck
import React, { useEffect, useRef } from "react";
import MessageItem from "./messageItem";

const MessageBox = ({ messages }) => {
  const root = useRef();

  useEffect(() => {
    if (root.current) {
      root.current.scrollTop = root.current.scrollHeight;
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="message-box" ref={root}>
      {messages.map((mess, idx) => {
        return <MessageItem key={idx} mess={mess} />;
      })}
    </div>
  );
};

export default MessageBox;
