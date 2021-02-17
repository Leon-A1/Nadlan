import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,

  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("nadlan-auth") === "authenticated") {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }
        }}
      ></Route>
    </div>
  );
};
export default ProtectedRoute;
