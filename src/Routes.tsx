import { FunctionComponent, ReactElement } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./domain/User";
import { TodoListClasses } from "./examples/list/classes";
import { TodoListCustomHook } from "./examples/list/custom-hook/component";
import { TodoListHighOrder } from "./examples/list/high-order-component";
import { TodoListHooks } from "./examples/list/hooks";
import { Cards } from "./views/Cards";
import { Home } from "./views/Home";

interface RouteConfig {
  path: string;
  view: ReactElement;
  private: boolean;
}

const routes: Record<string, RouteConfig> = {
  HOME: {
    path: "/",
    view: <Home />,
    private: false,
  },
  ITEMS: {
    path: "/items",
    view: <Cards />,
    private: true,
  },
  CLASSES: {
    path: "/classes",
    view: <TodoListClasses />,
    private: false,
  },
  HIGH_ORDER_COMPONENT: {
    path: "/high-order-component",
    view: <TodoListHighOrder />,
    private: false,
  },
  HOOKS: {
    path: "/hooks",
    view: <TodoListHooks />,
    private: false,
  },
  CUSTOM_HOOKS: {
    path: "/custom-hooks",
    view: <TodoListCustomHook />,
    private: false,
  },
};

const PrivateRoute: FunctionComponent<RouteProps> = ({
  children,
  ...props
}) => {
  const { name } = useUser();
  return (
    <Route
      exact
      {...props}
      render={({ location }) =>
        name ? children : <Redirect to={"/?unauthorized"} />
      }
    ></Route>
  );
};

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      {Object.entries(routes).map(([name, { view, ...props }]) =>
        props.private ? (
          <PrivateRoute key={name} {...props}>
            {view}
          </PrivateRoute>
        ) : (
          <Route key={name} exact {...props}>
            {view}
          </Route>
        )
      )}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export { Routes };
