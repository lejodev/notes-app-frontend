import React from "react";
import { Outlet, Link } from "react-router-dom";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <Link to="register">REGISTER </Link>
      {/* <Outlet /> */}
    </div>
  );
};

export default LoginRegister;
