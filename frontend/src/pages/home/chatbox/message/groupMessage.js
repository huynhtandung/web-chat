import { Avatar } from "antd";
import * as moment from "moment";
import React from "react";

const GroupMessage = ({ messages, currentUser }) => {
  const type = messages[0].sender === currentUser._id ? "sender" : "receiver";

  return (
    <div className="group-message">
      {type === "receiver" && <Avatar size={40}>USER</Avatar>}
      <div className={`group-message-content message-${type}`}>
        <span>Huynh, {moment(messages[0].sendAt).format("hh:mm A")}</span>
        {messages.map((mess, idx) => {
          return (
            <div key={idx} className={`message-${type}-item`}>
              {mess.message}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupMessage;
