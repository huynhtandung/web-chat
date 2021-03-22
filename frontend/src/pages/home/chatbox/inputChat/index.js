// @ts-nocheck
import React, { useRef } from "react";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./style.less";
import { useMutation } from "@apollo/react-hooks";
import { SEND_MESSAGE } from "@common";
import * as moment from "moment";

const InputChat = ({ friend, onSendNewMessage, onChangeLastMessage }) => {
  const inputRef = useRef();

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const { value } = inputRef.current;

    if (!value) {
      return;
    }

    sendMessage({
      variables: {
        input: {
          receiver: friend._id,
          message: value,
          sendAt: moment().valueOf(),
        },
      },
    }).then(({ data }) => {
      if (data.sendMessage) {
        onSendNewMessage(data.sendMessage);
        onChangeLastMessage(data.sendMessage);
      }

      inputRef.current.value = "";
    });
  };

  return (
    <div className="input-chat">
      <input
        placeholder="Type a message"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <div className="input-chat-btn" onClick={handleSendMessage}>
        <SendOutlined />
      </div>
    </div>
  );
};

export default InputChat;
