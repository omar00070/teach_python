import React, { useEffect } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Footer } from "./containers/Footer";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./components/Routers";
import Layout from "./containers/Layout";

function App(props) {
  useEffect(props.onTryAutoSignup, []);
  return (
    <div className="App">
      <Router>
        <Nav {...props} />
        <Layout>
          <BaseRoute />
        </Layout>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
