import React from "react";

import { Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dahsboard from "../pages/Dashboard";
import Route from "./Route";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dahsboard} isPrivate />
    </Switch>
  );
};
