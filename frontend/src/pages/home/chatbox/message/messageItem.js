import { AppContext } from "@pages/home";
import React, { useContext } from "react";
import "./style.less";

const MessageItem = ({ mess }) => {
  const currentUser = useContext(AppContext);
  const { sender, message } = mess;

  const cls = sender === currentUser._id ? "sender" : "receiver";

  return (
    <div className={`message-item-${cls}`}>
      <div>{message}</div>
    </div>
  );
};

export default MessageItem;
