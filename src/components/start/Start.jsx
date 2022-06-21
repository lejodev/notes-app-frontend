import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { Outlet, Link } from "react-router-dom";

import "../../styles/start/_start.scss";

const Start = () => {
  return (
    <div className="start">
      <div className="login-register">
        <Outlet />
      </div>
      <div className="image">IMAGE</div>
    </div>
  );
};

export default Start;
