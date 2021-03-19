// @ts-nocheck
import { useQuery } from "@apollo/react-hooks";
import { FRIENDS } from "@common";
import React from "react";
import FriendItem from "./friendItem";
import "./style.less";

const Friends = ({ onChatWithFriend, newMessage }) => {
  const { data } = useQuery(FRIENDS);

  const handleLastMessage = (friend, message) => {
    if (Object.keys(newMessage).length) {
      if (
        friend._id === newMessage.sender ||
        friend._id === newMessage.receiver
      ) {
        return newMessage.message;
      }
    }

    return message;
  };

  return (
    <div className="friends">
      {data &&
        data.friends.map((item, idx) => {
          return (
            <FriendItem
              key={idx}
              friend={item.friend}
              lastMessage={handleLastMessage(item.friend, item.lastMessage)}
              onChatWithFriend={onChatWithFriend}
            />
          );
        })}
    </div>
  );
};

export default Friends;
