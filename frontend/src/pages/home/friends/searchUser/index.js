import { SEARCH_USER } from "@common";
import { Client } from "@configs";
import { Divider, Input } from "antd";
import React, { useState } from "react";
import FriendItem from "../friendItem";
import "./style.less";

const SearchUser = ({ onChatWithFriend }) => {
  const [searchUser, setSearchUser] = useState([]);
  const handleSearchUser = (e) => {
    const keyword = e.target.value;

    Client.query({
      query: SEARCH_USER,
      variables: {
        input: {
          keyword,
        },
      },
    }).then(({ data }) => {
      setSearchUser(data.searchUser || []);
    });

    if (!keyword) {
      onChatWithFriend({});
    }
  };

  return (
    <div className="search-user">
      <Input
        placeholder="Type to search people, groups"
        allowClear
        onChange={handleSearchUser}
      />
      {searchUser.length > 0 && (
        <div className="search-user-list">
          <Divider>Search Users</Divider>
          {searchUser.map((user, idx) => {
            return (
              <FriendItem
                key={idx}
                friend={user}
                lastMessage=""
                onChatWithFriend={onChatWithFriend}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchUser;
