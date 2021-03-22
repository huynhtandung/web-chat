import { useSubscription } from "@apollo/react-hooks";
import { MESSAGES, MESSAGE_SENT } from "@common";
import { Client } from "@configs";
import React, { useEffect, useState } from "react";
import ChatHeader from "./chatHeader";
import InputChat from "./inputChat";
import MessageBox from "./message";
import "./style.less";

const ChatBox = ({ friend, onChangeLastMessage }) => {
  const [messages, setMessages] = useState([]);

  const { data } = useSubscription(MESSAGE_SENT);

  const onSendNewMessage = (message) => {
    setMessages([...messages, message]);
  };

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
      fetchPolicy: "network-only",
    }).then(({ data }) => {
      if (data) {
        setMessages(data.messages);
      }
    });
  }, [friend]);

  useEffect(() => {
    if (data && data.messageSent) {
      setMessages([...messages, data.messageSent]);
      onChangeLastMessage(data.messageSent);
    }
  }, [data]);

  return (
    <div className="chatbox">
      {Object.keys(friend).length ? (
        <>
          <ChatHeader friend={friend} />
          <MessageBox friend={friend} messages={messages} />
          <InputChat
            friend={friend}
            onSendNewMessage={onSendNewMessage}
            onChangeLastMessage={onChangeLastMessage}
          />
        </>
      ) : (
        <div>Start to chat!</div>
      )}
    </div>
  );
};

export default ChatBox;
