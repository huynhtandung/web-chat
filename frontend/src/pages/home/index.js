import { stateReducer } from "@components/commonFunctions";
import React, { createContext, useReducer, useState } from "react";
import ChatBox from "./chatbox";
import Friends from "./friends";
import "./style.less";

export const AppContext = createContext(null);

const Home = (props) => {
  const { currentUser } = props;

  const [friend, setFriend] = useState({});
  const [newMessage, setNewMessage] = useState({});

  const handleChatWithFriend = (friend) => {
    setFriend(friend);
  };

  const handleChangeLastMessage = (message) => {
    setNewMessage(message);
  };

  return (
    <AppContext.Provider value={currentUser}>
      <div className="home">
        <Friends
          newMessage={newMessage}
          onAddNewFriend={Object.keys(newMessage).length > 0 ? friend : {}}
          onChatWithFriend={handleChatWithFriend}
        />
        <ChatBox
          friend={friend}
          onChangeLastMessage={handleChangeLastMessage}
        />
      </div>
    </AppContext.Provider>
  );
};

export default Home;
