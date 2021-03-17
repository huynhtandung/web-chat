import { stateReducer } from "@components/commonFunctions";
import React, { createContext, useReducer, useState } from "react";
import ChatBox from "./chatbox";
import Friends from "./friends";
import "./style.less";

export const AppContext = createContext(null);

const Home = (props) => {
  const { currentUser } = props;

  const [friend, setFriend] = useState({});

  const handleChatWithFriend = (friend) => {
    setFriend(friend);
  };

  return (
    <AppContext.Provider value={currentUser}>
      <div className="home">
        <Friends onChatWithFriend={handleChatWithFriend} />
        <ChatBox friend={friend} currentUser={currentUser} />
      </div>
    </AppContext.Provider>
  );
};

export default Home;
