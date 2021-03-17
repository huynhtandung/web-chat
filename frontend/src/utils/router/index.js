import Layout from "@components/layout";
import { routes } from "@configs";
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

const Components = {};
routes.forEach((route) => {
  Components[route.component] = React.lazy(() =>
    import(/* webpackPrefetch: true */ `@pages/${route.component}`)
  );
});

const App = (props) => {
  const { history } = props;
  const accessToken =
    localStorage.getItem("app-access-token") ||
    sessionStorage.getItem("app-access-token") ||
    "";

  const handleRender = (isAuth, Component) => {
    if (!isAuth) {
      if (accessToken) {
        return <Redirect to="/" />;
      }

      return <Component />;
    }

    if (!accessToken) {
      return <Redirect to="/login" />;
    }

    return (
      <Layout history={history}>
        <Component />
      </Layout>
    );
  };

  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={() => {
            const isAuth = route.isAuth;
            const Component = Components[route.component];
            return (
              <React.Suspense fallback={null}>
                {handleRender(isAuth, Component)}
              </React.Suspense>
            );
          }}
        />
      ))}
      <Route render={() => <>404</>} />
    </Switch>
  );
};

const AppRouter = withRouter(App);
export { AppRouter };
