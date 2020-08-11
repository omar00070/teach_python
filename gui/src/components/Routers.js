import React from "react";
import { Route } from "react-router-dom";
import { MainPage } from "../containers/MainPage";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Profile from "../containers/Profile";
import AssignmentList from "../containers/AssignmentList";
import AssignmentDetail from "../containers/AssignmentDetail";
import AssignmentCreate from "../containers/AssignmentCreate";

const BaseRoute = (props) => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/assignments" component={AssignmentList} />
      <Route exact path="/assignments/:id" component={AssignmentDetail} />
      <Route exact path="/assignment-create" component={AssignmentCreate} />
    </>
  );
};

export default BaseRoute;
