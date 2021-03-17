import { MESSAGES } from "@common";
import { Client } from "@configs";
import React, { useEffect, useState } from "react";
import MessageBox from "./messageBox";
import "./style.less";

const ChatBox = ({ friend, currentUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!friend._id) {
      return;
    }

    Client.query({
      query: MESSAGES,
      variables: {
        input: {
          receiver: friend._id,
        },
      },
      // fetchPolicy: "network-only",
    }).then(({ data }) => {
      if (data) {
        setMessages(data.messages);
      }
    });
  }, [friend]);

  return (
    <div className="chatbox">
      <MessageBox messages={messages} />
    </div>
  );
};

export default ChatBox;
