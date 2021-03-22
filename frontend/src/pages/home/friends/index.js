// @ts-nocheck
import { useQuery } from "@apollo/react-hooks";
import { FRIENDS } from "@common";
import React from "react";
import FriendList from "./FriendList";
import SearchUser from "./searchUser";
import "./style.less";
import UserHeader from "./userHeader";

const Friends = ({ onChatWithFriend, newMessage, onAddNewFriend }) => {
  return (
    <div className="menu">
      <UserHeader />
      <SearchUser onChatWithFriend={onChatWithFriend} />
      <FriendList
        newMessage={newMessage}
        onChatWithFriend={onChatWithFriend}
        onAddNewFriend={onAddNewFriend}
      />
    </div>
  );
};

export default Friends;
