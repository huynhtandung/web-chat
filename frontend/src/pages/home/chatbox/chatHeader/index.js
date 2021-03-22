import React from "react";
import "./style.less";

const ChatHeader = ({ friend }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-fullname">{friend.fullName}</div>
      <div className="chat-header-status">Last seen 3 minutes ago</div>
    </div>
  );
};

export default ChatHeader;
