const routes = [
  {
    path: "/login",
    isAuth: false,
    component: "login",
    exact: true,
  },
  {
    path: "/",
    isAuth: true,
    component: "home",
    exact: true,
  },
];

export { routes };
