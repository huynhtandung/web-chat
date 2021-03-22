import { FRIENDS } from "@common";
import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import FriendItem from "../friendItem";

const FriendList = ({ newMessage, onChatWithFriend, onAddNewFriend }) => {
  const [friends, setFriends] = useState([]);

  const { data, loading } = useQuery(FRIENDS);

  useEffect(() => {
    if (data && data.friends) {
      setFriends(data.friends);
    }
  }, [loading]);

  useEffect(() => {
    if (Object.keys(onAddNewFriend).length === 0) {
      return;
    }

    const rs = [...friends].filter(
      (friend) => friend._id === onChatWithFriend._id
    );
    if (rs.length === 0) {
      setFriends([onAddNewFriend, ...friends]);
    }
  }, [onAddNewFriend]);

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
    <div className="friends-list">
      <Divider>Friends</Divider>
      {friends.map((item, idx) => {
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

export default FriendList;
