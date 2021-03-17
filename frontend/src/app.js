import { AppProvider, AppRouter } from "@utils";
import { hot } from "react-hot-loader";
import React from "react";
import "antd/dist/antd.less";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default hot(module)(App);
