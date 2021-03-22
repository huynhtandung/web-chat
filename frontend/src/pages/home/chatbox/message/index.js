// @ts-nocheck
import { AppContext } from "@pages/home";
import React, { useContext, useEffect, useRef } from "react";
import GroupMessage from "./groupMessage";
import "./style.less";

const MessageBox = ({ friend, messages }) => {
  const root = useRef();
  const currentUser = useContext(AppContext);

  useEffect(() => {
    if (root.current) {
      root.current.scrollTop = root.current.scrollHeight;
    }
  }, [messages]);

  //optimize ref result
  const formatMessages = (messages) => {
    const { _id } = currentUser;
    const result = [];
    let prev = "";

    for (const message of messages) {
      const { sender } = message;
      const current = sender === _id ? "sender" : "receiver";

      if (
        prev === current &&
        message.sendAt - result[result.length - 1][0].sendAt < 2 * 60 * 1000 // over 2minutes
      ) {
        result[result.length - 1].push(message);
      } else {
        result.push([message]);
      }

      prev = current;
    }

    return result;
  };

  return (
    <div className="message-box" ref={root}>
      {formatMessages(messages).map((groupMessages, idx) => {
        return (
          <GroupMessage
            key={idx}
            messages={groupMessages}
            currentUser={currentUser}
          />
        );
      })}
    </div>
  );
};

export default MessageBox;
