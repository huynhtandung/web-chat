// @ts-nocheck
import { useQuery } from "@apollo/react-hooks";
import { FRIENDS } from "@common";
import React from "react";
import FriendItem from "./friendItem";
import "./style.less";

const Friends = ({ onChatWithFriend }) => {
  const { data } = useQuery(FRIENDS);

  return (
    <div className="friends">
      {data &&
        data.friends.map((item, idx) => {
          return (
            <FriendItem
              key={idx}
              friend={item.friend}
              lastMessage={item.lastMessage}
              onChatWithFriend={onChatWithFriend}
            />
          );
        })}
    </div>
  );
};

export default Friends;
