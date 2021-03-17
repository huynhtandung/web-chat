import { Avatar } from "antd";
import React from "react";
import "./style.less";

const AvatarCustom = ({ size, name, type }) => {
  return (
    <div className="avatar">
      <Avatar size={size}>USER</Avatar>
      <div className={`avatar-status avatar-status-${type.toLowerCase()}`}>
        <div />
      </div>
    </div>
  );
};

export default AvatarCustom;
