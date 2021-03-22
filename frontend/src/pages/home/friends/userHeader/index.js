import { LogoutOutlined } from "@ant-design/icons";
import AvatarCustom from "@components/avatar";
import { AppContext } from "@pages/home";
import React, { useContext } from "react";
import "./style.less";

const UserHeader = () => {
  const currentUser = useContext(AppContext);

  return (
    <div className="user-header">
      <div className="user-info">
        <div className="user-info-detail">
          <AvatarCustom size={40} type="ONLINE" name="DH" />
          <div className="user-info-detail-fullname">
            {currentUser.fullName}
          </div>
        </div>
        <div className="user-info-logout">
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
