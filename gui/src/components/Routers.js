import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "../containers/MainPage";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Profile from "../containers/Profile";
import AssignmentList from "../containers/AssignmentList";
import AssignmentDetail from "../containers/AssignmentDetail";
import AssignmentCreate from "../containers/AssignmentCreate";
import Grades from "./Grades";

const BaseRoute = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/profile/:id" component={Profile} />
        <Route exact path="/assignments" component={AssignmentList} />
        <Route exact path="/assignments/:id" component={AssignmentDetail} />
        <Route path="/assignment-create" component={AssignmentCreate} />
      </Switch>
    </>
  );
};

export default BaseRoute;
