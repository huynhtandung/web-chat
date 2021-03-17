import { useQuery } from "@apollo/react-hooks";
import { ME } from "@common";
import { cloneElement } from "react";

const Layout = ({ children, history }) => {
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  return cloneElement(children, {
    history,
    currentUser: data && data.me.currentUser,
  });
};

export default Layout;
