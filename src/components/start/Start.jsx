import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { Outlet } from "react-router-dom";

const Start = () => {
  return (
    <div className="start">
      <div className="login-register">
          START
          <Login />
          <Outlet />
      </div>
      <div className="image">IMAGE</div>
    </div>
  );
};

export default Start;
