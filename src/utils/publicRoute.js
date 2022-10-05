//import React from "react";
//import { Route, Redirect, Navigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

const PublicRoute = ({ component: Component, restricted }) => {
  return isLogin() && restricted ? (
    <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
  ) : (
    Component
  );
};

export default PublicRoute;
