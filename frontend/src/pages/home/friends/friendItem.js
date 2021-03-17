import AvatarCustom from "@components/avatar";
import React from "react";

const FriendItem = ({ friend, lastMessage, onChatWithFriend }) => {
  const { _id, fullName } = friend;

  return (
    <div className="friend-item" onClick={() => onChatWithFriend(friend)}>
      <AvatarCustom size={40} name={fullName} type="ONLINE" />
      <div className="friend-info">
        <div className="friend-name">{fullName}</div>
        <div className="friend-last-message">{lastMessage}</div>
      </div>
    </div>
  );
};

export default FriendItem;
