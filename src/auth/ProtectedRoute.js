import React from "react";
import { Route, useHistory } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,

  ...rest
}) => {
  const history = useHistory();
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("nadlan-auth") === "authenticated") {
            return <Component />;
          } else {
            return history.push("/login");
          }
        }}
      ></Route>
    </div>
  );
};
export default ProtectedRoute;
